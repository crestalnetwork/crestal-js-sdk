# Crestal JavaScript SDK

JavaScript SDK for Crestal's services.

## Installation

```bash
npm install crestal-js-sdk
```

OR

```bash
yarn add crestal-js-sdk
```

## Configuration

### JavaScript Projects

No additional configuration needed. You can start using the SDK right away:

```javascript
// Using ESM (import)
import { login } from 'crestal-js-sdk/utils';

// OR using CommonJS (require)
const { login } = require('crestal-js-sdk/utils');
```

### TypeScript Projects

Add these essential compiler options to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "module": "ESNext",
    "esModuleInterop": true,
    "paths": {
      "crestal-js-sdk/*": [
        "./node_modules/crestal-js-sdk/dist/types/*"
      ]
    }
  }
}
```

## Usage Examples

### Generate Login Details

```typescript
import { login } from 'crestal-js-sdk/utils';

const privateKey = "0x70*******************************3164a4b050158496aa9191df818f380dbb3d";
const userAddress = "0xBB900BbE1A20dA4d474666B79a5fa6CE12629733";
const chainId = 80084;

if (privateKey && userAddress && chainId) {
  login(privateKey, userAddress, chainId);
} else {
  console.error("Missing required variables.");
}
```

Then run it with: `npx ts-node --esm YOUR_SCRIPT.ts` or `node YOUR_SCRIPT.js`.


### Chain Validation

For a full list of supported networks and their chain Ids, please check 
[here](https://docs.crestal.xyz/networks/supported-networks).

```typescript
import { isChainSupported, supportedChainIds } from 'crestal-js-sdk/utils';

// Validate a specific chain
const isValid = isChainSupported(80084); // true
```

Then run it with: `npx ts-node --esm YOUR_SCRIPT.ts` or `node YOUR_SCRIPT.js`.

