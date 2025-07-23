import { blockchainSymbol, fiatCurrency, tokenSymbol } from "./Const";

export type CreatePartnerOffRampTransactionV2RequestBody = {
    /**
     * User bank info to be saved
     */
    userBankInformation?: {
        /**
         * Always required. CLABE for MX, account number for DO
         */
        accountIdentifier?: string;
        /**
         * Required. Determines validation rules
         */
        country?: string;
        /**
         * Required only for DO
         */
        accountType?: string;
        /**
         * Required only for DO
         */
        bankName?: string;
        /**
         * Required only for DO
         */
        documentIdentifier?: string;
        /**
         * Required only for DO
         */
        documentType?: string;
    };
    /**
     * Identifier for the user who's submitting the off-ramp order
     */
    userId: string;
    /**
     * Amount of fiat currency to be received in conversion.
     */
    fiatAmount?: number;
    /**
     * Amount of crypto currency to be converted to fiat currency.
     */
    cryptoAmount?: number;
    /**
     * Identifier for the fiat currency which the user will rec.
     */
    fiatCurrency: fiatCurrency;
    /**
     * Identifier for the blockhain to token from which the conversion will be made.
     */
    blockchainSymbol: blockchainSymbol;
    /**
     * Identifier for the token from which the conversion will be made.
     */
    tokenSymbol: tokenSymbol;
    /**
     * Spread percentage to be applied to the exchange rate
     */
    premiumSpread?: number;
};
