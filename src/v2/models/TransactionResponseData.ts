import type { TransactionBankAccountResponse } from './TransactionBankAccountResponse';
import type { TransactionInvoiceResponse } from './TransactionInvoiceResponse';
export type TransactionResponseData = {
    /**
     * Transaction ID
     */
    id: string;
    /**
     * User ID
     */
    userId: string;
    /**
     * Transaction status
     */
    status: string;
    /**
     * Transaction type
     */
    type: string;
    /**
     * Token symbol
     */
    tokenSymbol: string;
    /**
     * Blockchain symbol
     */
    blockchainSymbol: string;
    /**
     * Fiat currency code
     */
    fiatCurrency: string;
    /**
     * Fiat amount
     */
    fiatAmount: number;
    /**
     * Crypto amount
     */
    cryptoAmount: number;
    /**
     * Exchange rate
     */
    exchangeRate: number;
    /**
     * Premium spread
     */
    premiumSpread: number;
    /**
     * Transaction created date
     */
    createdAt: string;
    /**
     * Transaction completed date
     */
    completedAt?: string | null;
    /**
     * Destination wallet address
     */
    destinationWalletAddress: string;
    /**
     * Bank account information
     */
    bankAccount: TransactionBankAccountResponse;
    /**
     * Transaction invoice information
     */
    invoice: TransactionInvoiceResponse;
    /**
     * Reason why the transaction was cancelled
     */
    cancellationReason?: string;
};

