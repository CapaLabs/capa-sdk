# Capa SDK

A TypeScript/JavaScript SDK for integrating with the Capa API v2. This SDK provides a comprehensive interface for managing cryptocurrency on-ramp and off-ramp transactions, user management, KYC verification, and more.

## Installation

```bash
npm install @capa/sdk
```

## Dependencies

- Node.js >= 14
- TypeScript >= 4.0 (for TypeScript projects)

## Quick Start

```typescript
import { PartnerV2Client } from '@capa/sdk';
import { 
    fiatCurrency, 
    blockchainSymbol, 
    tokenSymbol, 
    userType, 
    transactionType, 
    transactionStatus, 
    sortOrder 
} from '@capa/sdk';

// Initialize the client
const client = new PartnerV2Client(
    "https://staging-api.capa.fi", // Base URL
    "your-partner-api-key"         // Partner API Key
);

// Create an on-ramp transaction
const onRampRes = await client.onRamp.createPartnerOnRamp({
    userId: "your-user-id",
    fiatCurrency: fiatCurrency.DOP,
    blockchainSymbol: blockchainSymbol.SOL,
    tokenSymbol: tokenSymbol.SOL,
    fiatAmount: 100,
    destinationWalletAddress: "your-wallet-address"
});

console.log("Transaction created:", onRampRes.data?.id);
```

## Authentication

The SDK requires a Partner API Key for authentication. You'll receive this key when you register as a partner with Capa.

```typescript
const client = new PartnerV2Client(
    "https://api.capa.fi",           // Production URL
    "your-partner-api-key"           // Your API key
);
```

## Available Services

The SDK is organized into the following services:

### Off-Ramp Service

Convert cryptocurrency to fiat currency.

```typescript
// Create an off-ramp transaction
const offRampRes = await client.offRamp.createPartnerOffRamp({
    userId: "your-user-id",
    fiatCurrency: fiatCurrency.DOP,
    blockchainSymbol: blockchainSymbol.SOL,
    tokenSymbol: tokenSymbol.USDC,
    fiatAmount: 100,
    userBankInformation: {
        country: "MX",
        accountIdentifier: "123456789012345678"
    }
});
```

### On-Ramp Service

Convert fiat currency to cryptocurrency.

```typescript
// Create an on-ramp transaction
const onRampRes = await client.onRamp.createPartnerOnRamp({
    userId: "your-user-id",
    fiatCurrency: fiatCurrency.MXN,
    blockchainSymbol: blockchainSymbol.ETH,
    tokenSymbol: tokenSymbol.USDC,
    fiatAmount: 500,
    destinationWalletAddress: "your-wallet-address"
});
```

### Quotes Service

Get exchange rates and quotes for transactions.

```typescript
// Get a quote for an on-ramp transaction
const quoteRes = await client.quotes.getPartnerQuoteRate(
    tokenSymbol.USDC,        // Token symbol
    "ON_RAMP",               // Transaction type
    blockchainSymbol.ETH,    // Blockchain
    fiatCurrency.MXN,        // Fiat currency
    undefined,               // Crypto amount (optional)
    100                      // Fiat amount (optional)
);

console.log("Exchange rate:", quoteRes.data?.exchangeRate);
console.log("Estimated crypto amount:", quoteRes.data?.cryptoAmount);
```

### Users Service

Manage user accounts and profiles.

```typescript
// Create a new user
const userRes = await client.users.createUser({
    type: userType.INDIVIDUAL,
    email: "user@example.com",
    externalUserId: "your-internal-user-id"
});

console.log("User created:", userRes.data?.userId);
```

### Transactions Service

Query and manage transactions.

```typescript
// List transactions using the new interface
const transactionsRes = await client.transactions.listPartnerUserTransactions({
    type: transactionType.ON_RAMP,
    fiatCurrency: fiatCurrency.MXN,
    userId: "your-user-id",
    skip: 1,
    limit: 10,
    sortBy: "createdAt",
    sortOrder: sortOrder.DESC
});

// List transactions with status filter
const pendingTransactions = await client.transactions.listPartnerUserTransactions({
    status: transactionStatus.PENDING,
    type: transactionType.ON_RAMP
});

// Cancel a transaction
const cancelRes = await client.transactions.cancelPartnerTransaction(
    "transaction-id"
);
```

### KYC Service

Handle Know Your Customer verification processes.

```typescript
// Generate a verification link for a user
const kycLinkRes = await client.kyc.generateDirectLink({
    userId: "your-user-id",
    externalUserId: "your-external-user-id",
    redirectUrl: "https://yourapp.com/verification-complete"
});

console.log("Verification URL:", kycLinkRes.data?.url);
```

### Webhook Settings Service

Configure webhook endpoints for transaction notifications.

```typescript
// Update webhook settings
const webhookRes = await client.webhookSettings.updatePartnerWebhookSettings({
    webhookUrl: "https://yourapp.com/webhook",
    enableWebhooks: true
});
```

## Available Constants

The SDK exports several enums for use in your applications:

### Supported Fiat Currencies

```typescript
import { fiatCurrency } from '@capa/sdk';

fiatCurrency.MXN  // Mexican Peso
fiatCurrency.DOP  // Dominican Peso
```

### Supported Blockchains

```typescript
import { blockchainSymbol } from '@capa/sdk';

blockchainSymbol.ETH   // Ethereum
blockchainSymbol.SOL   // Solana
blockchainSymbol.POL   // Polygon
blockchainSymbol.BASE  // Base
blockchainSymbol.ARB   // Arbitrum
blockchainSymbol.BSC   // Binance Smart Chain
blockchainSymbol.OP    // Optimism
// ... and more
```

### Supported Tokens

```typescript
import { tokenSymbol } from '@capa/sdk';

tokenSymbol.USDC    // USD Coin
tokenSymbol.USDT    // Tether
tokenSymbol.ETH     // Ethereum
tokenSymbol.SOL     // Solana
tokenSymbol.BNB     // Binance Coin
// ... and more
```

### User Types

```typescript
import { userType } from '@capa/sdk';

userType.INDIVIDUAL  // Individual user
userType.BUSINESS    // Business user
```

### Countries

```typescript
import { country } from '@capa/sdk';

country.MX  // Mexico
country.DO  // Dominican Republic
```

## Complete Example

Here's a complete example showing common SDK usage patterns:

```typescript
import { 
    PartnerV2Client,
    CreatePartnerOffRampTransactionV2RequestBody,
    CreatePartnerUserBody,
    blockchainSymbol,
    fiatCurrency,
    tokenSymbol,
    userType
} from '@capa/sdk';

async function main() {
    // Initialize client
    const client = new PartnerV2Client(
        "https://staging-api.capa.fi",
        "your-partner-api-key"
    );

    try {
        // 1. Create a user
        const userRes = await client.users.createUser({
            type: userType.INDIVIDUAL,
            email: "user@example.com",
            externalUserId: "unique-external-id"
        });

        const userId = userRes.data?.userId;
        if (!userId) {
            throw new Error("Failed to create user");
        }

        // 2. Get a quote
        const quoteRes = await client.quotes.getPartnerQuoteRate(
            tokenSymbol.USDC,
            "ON_RAMP",
            blockchainSymbol.ETH,
            fiatCurrency.MXN,
            undefined,
            1000 // 1000 MXN
        );

        console.log("Quote:", quoteRes.data);

        // 3. Create an on-ramp transaction
        const onRampRes = await client.onRamp.createPartnerOnRamp({
            userId,
            fiatCurrency: fiatCurrency.MXN,
            blockchainSymbol: blockchainSymbol.ETH,
            tokenSymbol: tokenSymbol.USDC,
            fiatAmount: 1000,
            destinationWalletAddress: your-wallet-address"
        });

        console.log("On-ramp transaction:", onRampRes.data?.id);

        // 4. Create an off-ramp transaction
        const offRampRes = await client.offRamp.createPartnerOffRamp({
            userId,
            fiatCurrency: fiatCurrency.MXN,
            blockchainSymbol: blockchainSymbol.ETH,
            tokenSymbol: tokenSymbol.USDC,
            fiatAmount: 500,
            userBankInformation: {
                country: "MX",
                accountIdentifier: "012345678901234567"
            }
        });

        console.log("Off-ramp transaction:", offRampRes.data?.id);

        // 5. List user transactions
        const transactionsRes = await client.transactions.listPartnerUserTransactions({
            type: transactionType.ON_RAMP,
            fiatCurrency: fiatCurrency.MXN,
            userId: userId,
            skip: 1,
            limit: 20
        });

        console.log(`Found ${transactionsRes.data?.data?.length} transactions`);

    } catch (error) {
        console.error("Error:", error);
    }
}

main();
```

## Error Handling

The SDK uses standard JavaScript Promises and will throw errors for failed requests. Wrap your calls in try-catch blocks:

```typescript
try {
    const result = await client.onRamp.createPartnerOnRamp(requestData);
    // Handle success
} catch (error) {
    if (error.status === 400) {
        console.log("Bad request:", error.body);
    } else if (error.status === 401) {
        console.log("Authentication failed");
    } else {
        console.log("Unexpected error:", error);
    }
}
```

## TypeScript Support

The SDK is written in TypeScript and includes full type definitions. All request and response types are exported:

```typescript
import {
    CreatePartnerOnRampTransactionV2RequestBody,
    OnRampPartnerV2Response,
    GetPartnerQuoteExchangeV2Response
} from '@capa/sdk';
```

## Environment URLs

- **Staging**: `https://staging-api.capa.fi`
- **Production**: `https://production-api.capa.fi`

## Support

For support, please contact the Capa Partners team or refer to the official API documentation. 