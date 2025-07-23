import type { BankAccountResponse } from './BankAccountResponse';
import { blockchainSymbol, fiatCurrency, tokenSymbol } from './Const';
export type OnRampPartnerV2Response = {
    /**
     * Transaction identifier
     */
    id: string;
    /**
     * User identifier
     */
    userId: string;
    /**
     * Transaction status
     */
    status: string;
    /**
     * Amount of crypto currency involved in the transaction
     */
    cryptoAmount: number;
    /**
     * Amount of fiat currency involved in the transaction
     */
    fiatAmount: number;
    /**
     * Exchange rate used for the transaction
     */
    exchangeRate: number;
    /**
     * Token symbol
     */
    tokenSymbol:tokenSymbol;
    /**
     * Blockchain symbol
     */
    blockchainSymbol: blockchainSymbol;
    /**
     * Fiat currency symbol
     */
    fiatCurrency: fiatCurrency;
    /**
     * Premium spread applied to the transaction (0 if not provided)
     */
    premiumSpread?: number;
    /**
     * Transaction creation date
     */
    createdAt: string;
    /**
     * Transaction completion date (null if not completed)
     */
    completedAt: string | null;
    /**
     * Destination wallet address for the transaction
     */
    destinationWalletAddress: string;
    /**
     * Bank account information
     */
    bankAccount: BankAccountResponse;
};
