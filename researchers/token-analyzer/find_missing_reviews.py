#!/usr/bin/env python3
"""
Review Coverage Tool for Bitcoin Layers

This script identifies token contracts that exist in the database but don't have
analysis reviews yet. It helps researchers prioritize what needs to be analyzed.

Usage:
    python find_missing_reviews.py
"""

import os
import json
import re
import requests
from pathlib import Path
from typing import Dict, List, Set, Tuple
from dataclasses import dataclass

@dataclass
class TokenImpl:
    """Represents a token implementation from the database"""
    tokenimpl: str  # e.g., "BitGo-wBTC_BOB"
    token_slug: str  # e.g., "BitGo-wBTC" 
    network_slug: str  # e.g., "BOB"
    infra_slug: str  # e.g., "bitgo-wbtc"

@dataclass
class LayerReference:
    """Represents a reference to an infrastructure slug in a layer file"""
    layer_slug: str  # e.g., "bob"
    infra_slug: str  # e.g., "bitgo-wbtc"

class ReviewCoverageTool:
    def __init__(self):
        self.api_base = "https://api.btc-locked.com"
        # Paths relative to repo root (go up two levels from researchers/token-analyzer)
        self.repo_root = Path(__file__).parent.parent.parent
        self.layers_dir = self.repo_root / "content" / "layers"
        self.analysis_dir = Path("analysis-reports")  # Current directory
        
    def fetch_all_token_impls(self) -> List[Dict]:
        """Fetch all token implementations from the database API"""
        print("📡 Fetching token implementations from database...")
        
        try:
            response = requests.get(f"{self.api_base}/current_supplies_by_tokenimpl", timeout=30)
            response.raise_for_status()
            data = response.json()
            
            print(f"✅ Found {len(data)} token implementations in database")
            return data
            
        except requests.RequestException as e:
            print(f"❌ Error fetching token implementations from API: {e}")
            return []
    
    def fetch_all_networks(self) -> List[Dict]:
        """Fetch all networks from the database API"""
        print("📡 Fetching networks from database...")
        
        try:
            response = requests.get(f"{self.api_base}/current_supplies_by_network", timeout=30)
            response.raise_for_status()
            data = response.json()
            
            print(f"✅ Found {len(data)} networks in database")
            return data
            
        except requests.RequestException as e:
            print(f"❌ Error fetching networks from API: {e}")
            return []
    
    def parse_tokenimpl(self, tokenimpl: str) -> Tuple[str, str]:
        """
        Parse tokenimpl string to extract token slug and network
        Example: "BitGo-wBTC_BOB" -> ("BitGo-wBTC", "BOB")
        """
        if '_' in tokenimpl:
            parts = tokenimpl.rsplit('_', 1)  # Split from the right to handle tokens with underscores
            return parts[0], parts[1]
        return tokenimpl, "Unknown"
    
    def normalize_slug(self, slug: str) -> str:
        """
        Normalize slug to match layer file naming conventions
        Example: "BitGo-wBTC" -> "bitgo-wbtc"
        """
        return slug.lower().replace('_', '-')
    
    def extract_layer_references(self) -> Tuple[List[LayerReference], Set[str]]:
        """Extract all infrastructure slug references from layer files and return layer slugs"""
        print("🔍 Scanning layer files for infrastructure references...")
        
        references = []
        existing_layer_slugs = set()
        layer_files = list(self.layers_dir.glob("*.ts"))
        
        for layer_file in layer_files:
            try:
                content = layer_file.read_text(encoding='utf-8')
                
                # Extract the layer slug (e.g., slug: "bob")
                slug_match = re.search(r'slug:\s*["\']([^"\']+)["\']', content)
                if not slug_match:
                    continue
                
                layer_slug = slug_match.group(1)
                existing_layer_slugs.add(layer_slug.lower())
                
                # Simplified approach: just find all infrastructureSlug in the entire file
                # This avoids complex parsing of nested structures
                infra_matches = re.findall(
                    r'infrastructureSlug:\s*["\']([^"\']+)["\']',
                    content
                )
                
                for infra_slug in infra_matches:
                    references.append(LayerReference(layer_slug, infra_slug))
                
                print(f"   📄 {layer_file.name}: Found {len(infra_matches)} infrastructure references")
                
            except Exception as e:
                print(f"⚠️  Error parsing {layer_file.name}: {e}")
        
        print(f"✅ Found {len(references)} total infrastructure references across {len(layer_files)} layer files")
        print(f"✅ Found {len(existing_layer_slugs)} existing layer slugs")
        return references, existing_layer_slugs
    
    def get_existing_reviews(self) -> Set[str]:
        """Get all existing analysis reviews (contract addresses that have been analyzed)"""
        print("📂 Scanning for existing analysis reviews...")
        
        existing_reviews = set()
        
        if not self.analysis_dir.exists():
            print("⚠️  Analysis reports directory not found")
            return existing_reviews
        
        # Scan all subdirectories and files
        for json_file in self.analysis_dir.rglob("*.json"):
            # Extract contract address from filename
            filename = json_file.stem
            
            # Skip special files like governance reports and bitcoin transaction reports
            if filename.startswith(('governance_', 'bitcoin_transaction_', 'bitcoin_script_')):
                continue
            
            # Assume the filename is a contract address
            if filename.startswith('0x') and len(filename) == 42:
                existing_reviews.add(filename.lower())
        
        print(f"✅ Found {len(existing_reviews)} existing analysis reviews")
        return existing_reviews
    
    def analyze_coverage(self):
        """Main analysis function to find missing reviews and networks"""
        print("🚀 Starting Review Coverage Analysis")
        print("=" * 60)
        
        # Step 1: Get all token implementations and networks from database
        db_tokens = self.fetch_all_token_impls()
        db_networks = self.fetch_all_networks()
        
        if not db_tokens:
            print("❌ No token data from database. Exiting.")
            return
            
        if not db_networks:
            print("❌ No network data from database. Exiting.")
            return
        
        # Step 2: Parse database tokens
        parsed_tokens = []
        
        for token_data in db_tokens:
            tokenimpl = token_data.get('token_implementation', '')
            if not tokenimpl:
                continue
                
            token_slug, network_slug = self.parse_tokenimpl(tokenimpl)
            infra_slug = self.normalize_slug(token_slug)
            
            parsed_tokens.append(TokenImpl(
                tokenimpl=tokenimpl,
                token_slug=token_slug,
                network_slug=network_slug.lower(),
                infra_slug=infra_slug
            ))
        
        print(f"📊 Parsed {len(parsed_tokens)} token implementations")
        
        # Step 3: Parse database networks
        db_network_slugs = set()
        for network_data in db_networks:
            network_slug = network_data.get('network_slug', '')
            if network_slug:
                db_network_slugs.add(network_slug.lower())
        
        print(f"📊 Found {len(db_network_slugs)} networks in database")
        
        # Step 4: Get layer file references and existing layer slugs
        layer_refs, existing_layer_slugs = self.extract_layer_references()
        
        # Step 5: Find missing networks
        missing_networks = db_network_slugs - existing_layer_slugs
        covered_networks = db_network_slugs & existing_layer_slugs
        
        # Step 6: Analyze token coverage with fuzzy matching
        # Group infrastructure references by network for efficient lookup
        network_infrastruture_map = {}
        for ref in layer_refs:
            if ref.layer_slug not in network_infrastruture_map:
                network_infrastruture_map[ref.layer_slug] = set()
            network_infrastruture_map[ref.layer_slug].add(ref.infra_slug)
        
        missing_reviews = []
        covered_tokens = []
        
        def is_slug_match(token_slug: str, infra_slug: str) -> bool:
            """
            Check if token slug and infrastructure slug match using fuzzy logic.
            Handles cases where database adds network suffixes or other variations.
            """
            # Exact match
            if token_slug == infra_slug:
                return True
            
            # Check if one is a prefix of the other (handles network suffixes)
            if token_slug.startswith(infra_slug) or infra_slug.startswith(token_slug):
                return True
            
            # Check if they match after removing common network suffixes
            # Remove network-specific suffixes like "-hemi", "-ethereum", etc.
            import re
            # Common network suffixes pattern
            network_suffix_pattern = r'-(?:hemi|ethereum|arbitrum|base|optimism|polygon|bsc|bnb|avalanche|fantom|solana|bitcoin|btc)$'
            
            token_base = re.sub(network_suffix_pattern, '', token_slug, flags=re.IGNORECASE)
            infra_base = re.sub(network_suffix_pattern, '', infra_slug, flags=re.IGNORECASE)
            
            if token_base == infra_base:
                return True
            
            # Also check prefix matching on the base names
            if token_base.startswith(infra_base) or infra_base.startswith(token_base):
                return True
            
            return False
        
        for token in parsed_tokens:
            # Check if this token is referenced in any layer file using fuzzy matching
            is_referenced = False
            
            if token.network_slug in network_infrastruture_map:
                layer_infra_slugs = network_infrastruture_map[token.network_slug]
                
                # Check if any infrastructure slug matches this token
                for infra_slug in layer_infra_slugs:
                    if is_slug_match(token.infra_slug, infra_slug):
                        is_referenced = True
                        break
            
            if is_referenced:
                covered_tokens.append(token)
            else:
                missing_reviews.append(token)
        
        # Step 7: Get existing reviews
        existing_reviews = self.get_existing_reviews()
        
        # Display results
        print("\n" + "=" * 60)
        print("📋 ANALYSIS RESULTS")
        print("=" * 60)
        
        # Network Coverage Analysis
        print(f"\n🌐 NETWORK COVERAGE ANALYSIS:")
        print(f"   Total networks in database: {len(db_network_slugs)}")
        print(f"   Networks with layer files: {len(covered_networks)}")
        print(f"   Missing networks: {len(missing_networks)}")
        
        if missing_networks:
            print(f"\n⚠️  MISSING NETWORKS ({len(missing_networks)}):")
            print(f"   These networks exist in the database but have NO layer files:")
            for network in sorted(missing_networks):
                print(f"      ❌ {network}")
        else:
            print("   🎉 All networks in the database have layer files!")
        
        # Token Coverage Analysis
        print(f"\n✅ COVERED TOKENS ({len(covered_tokens)}):")
        print(f"   These tokens are referenced in layer files:")
        
        for token in sorted(covered_tokens, key=lambda x: (x.network_slug, x.infra_slug)):
            print(f"   ✓ {token.infra_slug} on {token.network_slug} ({token.tokenimpl})")
        
        print(f"\n⚠️  MISSING TOKEN REVIEWS ({len(missing_reviews)}):")
        print(f"   These tokens exist in the database but are NOT referenced in any layer file:")
        
        if missing_reviews:
            # Group by network for better readability
            by_network = {}
            for token in missing_reviews:
                if token.network_slug not in by_network:
                    by_network[token.network_slug] = []
                by_network[token.network_slug].append(token)
            
            for network in sorted(by_network.keys()):
                tokens = by_network[network]
                print(f"\n   📍 {network.upper()} ({len(tokens)} tokens):")
                for token in sorted(tokens, key=lambda x: x.infra_slug):
                    print(f"      ❌ {token.infra_slug} ({token.tokenimpl})")
        else:
            print("   🎉 All tokens in the database are covered by layer files!")
        
        # Summary
        total_tokens = len(parsed_tokens)
        token_coverage_percentage = (len(covered_tokens) / total_tokens * 100) if total_tokens > 0 else 0
        network_coverage_percentage = (len(covered_networks) / len(db_network_slugs) * 100) if db_network_slugs else 0
        
        # Step 8: Find layer references NOT in database (reverse analysis)
        print(f"\n" + "=" * 60)
        print("🔍 LAYER REFERENCES NOT IN DATABASE:")
        print("   These tokens are defined in layer files but do NOT exist in the database:")
        
        # Create a set of all database token slugs by network for quick lookup
        db_token_lookup = {}
        for token in parsed_tokens:
            network_key = token.network_slug.lower()
            if network_key not in db_token_lookup:
                db_token_lookup[network_key] = set()
            db_token_lookup[network_key].add(token.infra_slug.lower())
        
        orphaned_references = []
        network_orphans = {}
        
        for ref in layer_refs:
            network_key = ref.layer_slug.lower()
            infra_key = ref.infra_slug.lower()
            
            # Check if this network exists in database
            if network_key not in db_token_lookup:
                orphaned_references.append(ref)
                if network_key not in network_orphans:
                    network_orphans[network_key] = []
                network_orphans[network_key].append(ref)
                continue
            
            # Check if this token exists for this network using fuzzy matching
            found_match = False
            for db_infra_slug in db_token_lookup[network_key]:
                if infra_key.startswith(db_infra_slug) or db_infra_slug.startswith(infra_key):
                    found_match = True
                    break
            
            if not found_match:
                orphaned_references.append(ref)
                if network_key not in network_orphans:
                    network_orphans[network_key] = []
                network_orphans[network_key].append(ref)
        
        if orphaned_references:
            for network_slug in sorted(network_orphans.keys()):
                network_refs = network_orphans[network_slug]
                print(f"   📍 {network_slug.upper()} ({len(network_refs)} references):")
                for ref in sorted(network_refs, key=lambda x: x.infra_slug):
                    print(f"      ❓ {ref.infra_slug} (in {ref.layer_slug} layer file)")
        else:
            print("   ✅ All layer file references have corresponding database entries!")
        
        print(f"\n" + "=" * 60)
        print(f"📊 SUMMARY:")
        print(f"   🌐 NETWORKS:")
        print(f"      Total networks in database: {len(db_network_slugs)}")
        print(f"      Networks with layer files: {len(covered_networks)}")
        print(f"      Missing networks: {len(missing_networks)}")
        print(f"      Network coverage: {network_coverage_percentage:.1f}%")
        print(f"   🪙 TOKENS:")
        print(f"      Total tokens in database: {total_tokens}")
        print(f"      Covered by layer files: {len(covered_tokens)}")
        print(f"      Missing from layer files: {len(missing_reviews)}")
        print(f"      Token coverage: {token_coverage_percentage:.1f}%")
        print(f"   ❓ ORPHANED REFERENCES:")
        print(f"      Layer references not in database: {len(orphaned_references)}")
        print(f"      These may be outdated or have naming mismatches")
        print("=" * 60)
        
        if missing_networks or missing_reviews:
            print(f"\n💡 NEXT STEPS:")
            if missing_networks:
                print(f"   🌐 NETWORKS:")
                print(f"      1. Create layer files for missing networks: {', '.join(sorted(missing_networks))}")
                print(f"      2. Follow existing layer file structure (see content/layers/)")
            if missing_reviews:
                print(f"   🪙 TOKENS:")
                print(f"      1. Review the missing tokens above")
                print(f"      2. Add them to appropriate layer files in the BTC custody section")
                print(f"      3. Run token analysis for contracts that need detailed reviews")
            print(f"   🔄 Re-run this script to track progress")

def main():
    """Main entry point"""
    tool = ReviewCoverageTool()
    tool.analyze_coverage()

if __name__ == "__main__":
    main()