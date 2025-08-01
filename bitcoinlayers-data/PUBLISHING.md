# Publishing Guide

## Publishing to NPM

1. **Build the package**:
   ```bash
   npm run build
   ```

2. **Update version** in `package.json` as needed

3. **Login to NPM** (first time only):
   ```bash
   npm login
   ```

4. **Publish**:
   ```bash
   npm publish
   ```

## Using as Local Dependency During Development

### Option 1: npm link (Recommended for development)

1. **In the bitcoinlayers-data directory**:
   ```bash
   npm link
   ```

2. **In your consuming project**:
   ```bash
   npm link @bitcoinlayers/data
   ```

### Option 2: Local file path

In your consuming project's `package.json`:
```json
{
  "dependencies": {
    "@bitcoinlayers/data": "file:../bitcoinlayers-data"
  }
}
```

## Updating the Main Bitcoin Layers Project

To make the main Bitcoin Layers website consume this package:

1. Publish the package to NPM or use npm link
2. Update the main project to import from `@bitcoinlayers/data` instead of local files
3. Remove the now-redundant `content/` and `util/*_index.tsx` files from the main project

## Example Migration

**Before** (in main project):
```typescript
import { allLayers } from '../util/layer_index';
import { LayerProject } from '../content/props';
```

**After** (consuming the package):
```typescript
import { allLayers, LayerProject } from '@bitcoinlayers/data';
```