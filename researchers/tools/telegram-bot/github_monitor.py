#!/usr/bin/env python3
"""
GitHub Monitor for Bitcoin Layers Bot
Monitors GitHub repositories for commits, releases, issues, and PRs.
"""

import asyncio
import os
import re
import logging
from typing import Dict, List, Any, Optional
from dataclasses import dataclass
from datetime import datetime, timedelta

import aiohttp

logger = logging.getLogger(__name__)

@dataclass
class GitHubRepo:
    owner: str
    name: str
    full_name: str
    url: str
    layer_name: Optional[str] = None

class GitHubMonitor:
    def __init__(self, config):
        self.config = config
        self.session: Optional[aiohttp.ClientSession] = None
        self.github_headers = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'BitcoinLayers-Monitor'
        }
        
        # Add GitHub token if available
        if config.github_token:
            self.github_headers['Authorization'] = f'token {config.github_token}'
    
    async def get_session(self) -> aiohttp.ClientSession:
        """Get or create an aiohttp session"""
        if self.session is None or self.session.closed:
            self.session = aiohttp.ClientSession(headers=self.github_headers)
        return self.session
    
    async def close(self):
        """Close the aiohttp session"""
        if self.session and not self.session.closed:
            await self.session.close()
    
    def extract_github_urls_from_content(self) -> List[GitHubRepo]:
        """Extract GitHub repository URLs from Bitcoin Layers content files"""
        repos = []
        github_url_pattern = re.compile(r'https://github\.com/([^/\s"\']+)/([^/\s"\']+)')
        
        try:
            # Get the project root (two levels up from this script)
            project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
            layers_path = os.path.join(project_root, self.config.layers_content_path)
            infrastructures_path = os.path.join(project_root, self.config.infrastructures_content_path)
            
            # Process layer files
            if os.path.exists(layers_path):
                for filename in os.listdir(layers_path):
                    if filename.endswith('.ts'):
                        file_path = os.path.join(layers_path, filename)
                        layer_name = filename.replace('.ts', '')
                        repos.extend(self._extract_from_file(file_path, layer_name, 'layer'))
            
            # Process infrastructure files
            if os.path.exists(infrastructures_path):
                for filename in os.listdir(infrastructures_path):
                    if filename.endswith('.ts'):
                        file_path = os.path.join(infrastructures_path, filename)
                        infra_name = filename.replace('.ts', '')
                        repos.extend(self._extract_from_file(file_path, infra_name, 'infrastructure'))
            
            # Remove duplicates while preserving order
            seen = set()
            unique_repos = []
            for repo in repos:
                repo_key = f"{repo.owner}/{repo.name}"
                if repo_key not in seen:
                    seen.add(repo_key)
                    unique_repos.append(repo)
            
            logger.info(f"Extracted {len(unique_repos)} unique GitHub repositories from content files")
            return unique_repos
            
        except Exception as e:
            logger.error(f"Error extracting GitHub URLs from content: {e}")
            return []
    
    def _extract_from_file(self, file_path: str, name: str, content_type: str) -> List[GitHubRepo]:
        """Extract GitHub URLs from a single content file"""
        repos = []
        github_url_pattern = re.compile(r'https://github\.com/([^/\s"\']+)/([^/\s"\']+)')
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
                matches = github_url_pattern.findall(content)
                for owner, repo_name in matches:
                    # Clean up repo name (remove .git, trailing slashes, etc.)
                    repo_name = repo_name.rstrip('/').replace('.git', '')
                    
                    # Skip if it looks like a file path or has weird characters
                    if '.' in repo_name and not repo_name.endswith('.git'):
                        continue
                    
                    repo = GitHubRepo(
                        owner=owner,
                        name=repo_name,
                        full_name=f"{owner}/{repo_name}",
                        url=f"https://github.com/{owner}/{repo_name}",
                        layer_name=f"{name} ({content_type})"
                    )
                    repos.append(repo)
                    
        except Exception as e:
            logger.warning(f"Error reading file {file_path}: {e}")
        
        return repos
    
    async def get_all_repos(self) -> List[GitHubRepo]:
        """Get all GitHub repositories to monitor"""
        repos = self.extract_github_urls_from_content()
        
        # Limit the number of repos per cycle for rate limiting
        limited_repos = repos[:self.config.max_repos_per_cycle]
        
        if len(repos) > len(limited_repos):
            logger.info(f"Limited to {len(limited_repos)} repos per cycle (total: {len(repos)})")
        
        return limited_repos
    
    async def check_repo_changes(self, repo: GitHubRepo, last_state: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Check a specific repository for changes"""
        changes = []
        
        try:
            if self.config.monitor_commits:
                commit_changes = await self._check_new_commits(repo, last_state)
                changes.extend(commit_changes)
            
            if self.config.monitor_releases:
                release_changes = await self._check_new_releases(repo, last_state)
                changes.extend(release_changes)
            
            if self.config.monitor_issues:
                issue_changes = await self._check_new_issues(repo, last_state)
                changes.extend(issue_changes)
            
            if self.config.monitor_prs:
                pr_changes = await self._check_new_prs(repo, last_state)
                changes.extend(pr_changes)
            
        except Exception as e:
            logger.error(f"Error checking repo {repo.full_name}: {e}")
        
        return changes
    
    async def _check_new_commits(self, repo: GitHubRepo, last_state: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Check for new commits in the repository (last 24 hours only)"""
        changes = []
        
        try:
            session = await self.get_session()
            url = f"https://api.github.com/repos/{repo.full_name}/commits"
            
            # Get commits from the last 24 hours
            since_time = (datetime.now() - timedelta(hours=24)).isoformat()
            params = {'per_page': 50, 'since': since_time}  # Only commits from last 24 hours
            
            async with session.get(url, params=params) as response:
                if response.status == 200:
                    commits = await response.json()
                    
                    # Filter commits to only those from the last 24 hours
                    recent_commits = []
                    for commit in commits:
                        commit_date = datetime.fromisoformat(commit['commit']['author']['date'].replace('Z', '+00:00'))
                        hours_ago = (datetime.now(commit_date.tzinfo) - commit_date).total_seconds() / 3600
                        
                        if hours_ago <= 24:  # Only commits from last 24 hours
                            recent_commits.append(commit)
                    
                    # Update state with the latest commit if any
                    if commits:
                        last_state['last_commit_sha'] = commits[0]['sha']
                    
                    # Create change objects for recent commits
                    for commit in reversed(recent_commits):  # Show oldest first
                        changes.append({
                            'type': 'new_commit',
                            'sha': commit['sha'],
                            'message': commit['commit']['message'],
                            'author': commit['commit']['author']['name'],
                            'url': commit['html_url'],
                            'timestamp': datetime.fromisoformat(commit['commit']['author']['date'].replace('Z', '+00:00'))
                        })
                
                elif response.status == 404:
                    logger.warning(f"Repository {repo.full_name} not found or not accessible")
                else:
                    logger.warning(f"Failed to fetch commits for {repo.full_name}: HTTP {response.status}")
        
        except Exception as e:
            logger.error(f"Error checking commits for {repo.full_name}: {e}")
        
        return changes
    
    async def _check_new_releases(self, repo: GitHubRepo, last_state: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Check for new releases in the repository (last 7 days)"""
        changes = []
        
        try:
            session = await self.get_session()
            url = f"https://api.github.com/repos/{repo.full_name}/releases"
            params = {'per_page': 20}  # Get last 20 releases to check dates
            
            async with session.get(url, params=params) as response:
                if response.status == 200:
                    releases = await response.json()
                    
                    # Filter releases to only those from the last 7 days
                    recent_releases = []
                    for release in releases:
                        if release.get('published_at'):
                            release_date = datetime.fromisoformat(release['published_at'].replace('Z', '+00:00'))
                            days_ago = (datetime.now(release_date.tzinfo) - release_date).total_seconds() / (24 * 3600)
                            
                            if days_ago <= 7:  # Only releases from last 7 days
                                recent_releases.append(release)
                    
                    # Update state with the latest release if any
                    if releases:
                        last_state['last_release_tag'] = releases[0]['tag_name']
                    
                    # Create change objects for recent releases
                    for release in reversed(recent_releases):  # Show oldest first
                        changes.append({
                            'type': 'new_release',
                            'tag': release['tag_name'],
                            'title': release['name'] or release['tag_name'],
                            'author': release['author']['login'] if release.get('author') else 'Unknown',
                            'url': release['html_url'],
                            'prerelease': release['prerelease'],
                            'timestamp': datetime.fromisoformat(release['published_at'].replace('Z', '+00:00')) if release.get('published_at') else None
                        })
                
                elif response.status == 404:
                    logger.warning(f"Repository {repo.full_name} not found or releases not accessible")
                
        except Exception as e:
            logger.error(f"Error checking releases for {repo.full_name}: {e}")
        
        return changes
    
    async def _check_new_issues(self, repo: GitHubRepo, last_state: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Check for new issues in the repository"""
        changes = []
        
        try:
            session = await self.get_session()
            url = f"https://api.github.com/repos/{repo.full_name}/issues"
            params = {'state': 'open', 'sort': 'created', 'direction': 'desc', 'per_page': 10}
            
            async with session.get(url, params=params) as response:
                if response.status == 200:
                    issues = await response.json()
                    last_issue_number = last_state.get('last_issue_number', 0)
                    
                    new_issues = [issue for issue in issues 
                                 if issue['number'] > last_issue_number and not issue.get('pull_request')]
                    
                    # Update state with the latest issue number
                    if issues:
                        latest_issue = max(issues, key=lambda x: x['number'])
                        if not latest_issue.get('pull_request'):
                            last_state['last_issue_number'] = latest_issue['number']
                    
                    # Create change objects for new issues
                    for issue in reversed(new_issues):  # Show oldest first
                        changes.append({
                            'type': 'new_issue',
                            'number': issue['number'],
                            'title': issue['title'],
                            'author': issue['user']['login'],
                            'url': issue['html_url'],
                            'timestamp': datetime.fromisoformat(issue['created_at'].replace('Z', '+00:00'))
                        })
                
        except Exception as e:
            logger.error(f"Error checking issues for {repo.full_name}: {e}")
        
        return changes
    
    async def _check_new_prs(self, repo: GitHubRepo, last_state: Dict[str, Any]) -> List[Dict[str, Any]]:
        """Check for new pull requests in the repository"""
        changes = []
        
        try:
            session = await self.get_session()
            url = f"https://api.github.com/repos/{repo.full_name}/pulls"
            params = {'state': 'open', 'sort': 'created', 'direction': 'desc', 'per_page': 10}
            
            async with session.get(url, params=params) as response:
                if response.status == 200:
                    prs = await response.json()
                    last_pr_number = last_state.get('last_pr_number', 0)
                    
                    new_prs = [pr for pr in prs if pr['number'] > last_pr_number]
                    
                    # Update state with the latest PR number
                    if prs:
                        latest_pr = max(prs, key=lambda x: x['number'])
                        last_state['last_pr_number'] = latest_pr['number']
                    
                    # Create change objects for new PRs
                    for pr in reversed(new_prs):  # Show oldest first
                        changes.append({
                            'type': 'new_pr',
                            'number': pr['number'],
                            'title': pr['title'],
                            'author': pr['user']['login'],
                            'url': pr['html_url'],
                            'timestamp': datetime.fromisoformat(pr['created_at'].replace('Z', '+00:00'))
                        })
                
        except Exception as e:
            logger.error(f"Error checking PRs for {repo.full_name}: {e}")
        
        return changes

# Example usage and testing functions
async def test_github_monitor():
    """Test the GitHub monitor"""
    from config import Config
    
    config = Config()
    monitor = GitHubMonitor(config)
    
    try:
        repos = await monitor.get_all_repos()
        print(f"Found {len(repos)} repositories:")
        
        for repo in repos[:5]:  # Show first 5
            print(f"  - {repo.full_name} (from {repo.layer_name})")
            print(f"    URL: {repo.url}")
            
            # Test checking for changes
            fake_state = {}
            changes = await monitor.check_repo_changes(repo, fake_state)
            if changes:
                print(f"    Changes: {len(changes)}")
                for change in changes[:3]:  # Show first 3 changes
                    print(f"      - {change['type']}: {change.get('title', change.get('message', 'N/A'))}")
            else:
                print(f"    No changes detected")
            print()
    
    finally:
        await monitor.close()

if __name__ == "__main__":
    asyncio.run(test_github_monitor())