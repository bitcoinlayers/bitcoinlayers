#!/usr/bin/env python3
"""
Migration script to organize analysis reports into layer-specific directories.
This script moves existing analysis files from the flat analysis-reports directory
into layer-specific subdirectories based on their layer association.
"""

import os
import json
import shutil
from pathlib import Path

def get_layer_slug(layer_name):
    """Convert layer name to directory-safe slug"""
    if not layer_name:
        return None
    return layer_name.lower().replace(" ", "_").replace("-", "_")

def migrate_analysis_files():
    """Migrate existing analysis files to layer-specific directories"""
    
    # Define paths
    script_dir = Path(__file__).parent
    reports_dir = script_dir / "analysis-reports"
    
    if not reports_dir.exists():
        print("❌ analysis-reports directory not found")
        return
    
    print("🔍 Scanning for analysis files to migrate...")
    
    # Track migrations
    migrations = []
    unknown_files = []
    
    # Process each JSON file in the root directory
    for file_path in reports_dir.glob("*.json"):
        if file_path.is_file():
            try:
                # Load the JSON file to check for layer association
                with open(file_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                
                layer_name = None
                
                # Check different ways layer information might be stored
                if 'layer_association' in data and 'layer_name' in data['layer_association']:
                    layer_name = data['layer_association']['layer_name']
                elif 'metadata' in data and 'layer_name' in data['metadata']:
                    layer_name = data['metadata']['layer_name']
                elif file_path.stem.startswith('bitcoin_transaction_'):
                    # Try to extract layer from Bitcoin transaction filename
                    parts = file_path.stem.split('_')
                    if len(parts) >= 3:
                        # Extract layer name from filename like bitcoin_transaction_nomic_9d67826eb17200f9
                        layer_name = parts[2].title()  # nomic -> Nomic
                
                if layer_name:
                    layer_slug = get_layer_slug(layer_name)
                    if layer_slug:
                        # Create layer directory
                        layer_dir = reports_dir / layer_slug
                        layer_dir.mkdir(exist_ok=True)
                        
                        # Move the JSON file
                        new_path = layer_dir / file_path.name
                        shutil.move(str(file_path), str(new_path))
                        migrations.append((str(file_path), str(new_path), layer_name))
                        
                        # Also move corresponding markdown file if it exists
                        md_file = file_path.with_suffix('.md')
                        if md_file.exists():
                            md_new_path = layer_dir / md_file.name
                            shutil.move(str(md_file), str(md_new_path))
                            migrations.append((str(md_file), str(md_new_path), layer_name))
                    else:
                        unknown_files.append(str(file_path))
                else:
                    unknown_files.append(str(file_path))
                    
            except (json.JSONDecodeError, KeyError, Exception) as e:
                print(f"⚠️  Error processing {file_path}: {e}")
                unknown_files.append(str(file_path))
    
    # Also process any remaining markdown files without JSON
    for file_path in reports_dir.glob("*.md"):
        if file_path.is_file():
            # Check if this markdown file wasn't already moved
            json_counterpart = file_path.with_suffix('.json')
            if not json_counterpart.exists():
                # Try to infer layer from filename patterns
                layer_name = None
                if file_path.stem.startswith('governance_'):
                    # For governance files, we might need to check content or use default layer
                    pass  # Keep in root for now
                elif file_path.stem.startswith('bitcoin_transaction_'):
                    parts = file_path.stem.split('_')
                    if len(parts) >= 3:
                        layer_name = parts[2].title()
                
                if layer_name:
                    layer_slug = get_layer_slug(layer_name)
                    if layer_slug:
                        layer_dir = reports_dir / layer_slug
                        layer_dir.mkdir(exist_ok=True)
                        
                        new_path = layer_dir / file_path.name
                        shutil.move(str(file_path), str(new_path))
                        migrations.append((str(file_path), str(new_path), layer_name))
                else:
                    unknown_files.append(str(file_path))
    
    # Print results
    print(f"\n✅ Migration completed!")
    print(f"📁 Migrated {len(migrations)} files to layer-specific directories:")
    
    for old_path, new_path, layer in migrations:
        rel_old = os.path.relpath(old_path, reports_dir)
        rel_new = os.path.relpath(new_path, reports_dir)
        print(f"   {rel_old} → {rel_new} ({layer})")
    
    if unknown_files:
        print(f"\n⚠️  {len(unknown_files)} files couldn't be categorized (left in root):")
        for file_path in unknown_files:
            rel_path = os.path.relpath(file_path, reports_dir)
            print(f"   {rel_path}")
    
    # Show the new directory structure
    print(f"\n📂 New directory structure:")
    for item in sorted(reports_dir.iterdir()):
        if item.is_dir():
            file_count = len(list(item.glob("*")))
            print(f"   📁 {item.name}/ ({file_count} files)")
        else:
            print(f"   📄 {item.name}")

if __name__ == "__main__":
    migrate_analysis_files()