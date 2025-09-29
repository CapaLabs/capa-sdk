import { fiatCurrency } from './Const';

export type CreatePartnerCrossRampTransactionV2RequestBody = {
  /**
   * Identifier for the user
   */
  userId: string;
  /**
   * The source fiat currency symbol
   */
  sourceCurrency: fiatCurrency;
  /**
   * The target fiat currency symbol
   */
  targetCurrency: fiatCurrency;
  /**
   * Amount of source fiat currency to convert
   */
  sourceAmount?: number;
  /**
   * Desired amount of target fiat currency to receive
   */
  targetAmount?: number;
  /**
   * Spread percentage to be applied to the exchange rate
   */
  premiumSpread?: number;
  /**
   * Quote id of a previously calculated quote
   */
  quoteId?: string;
  /**
   * Bank account information for the transaction
   */
  userBankInformation: {
    /**
     * Country code for the bank account
     */
    country: string;
    /**
     * Bank account identifier
     */
    accountIdentifier: string;
    /**
     * Account type (mandatory for Dominican Republic)
     */
    accountType?: string;
    /**
     * Bank name (mandatory for Dominican Republic)
     */
    bankName?: string;
    /**
     * Document identifier (mandatory for Dominican Republic)
     */
    documentIdentifier?: string;
    /**
     * Document type (mandatory for Dominican Republic)
     */
    documentType?: string;
  };
};
