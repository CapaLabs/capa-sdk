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
  targetBankAccount: {
    /**
     * Country code for the bank account
     */
    country: string;
    /**
     * Bank account identifier
     */
    accountIdentifier: string;
    /**
     * Routing number (mandatory for United States)
     */
    routingNumber?: string;
    /**
     * BIC (mandatory for SEPA countries)
     */
    bic?: string;
    /**
     * Account type (mandatory for Dominican Republic and United States)
     */
    accountType?: string;
    /**
     * Bank name (mandatory for Dominican Republic and United States)
     */
    bankName?: string;
    /**
     * Document identifier (mandatory for Dominican Republic and United States)
     */
    documentIdentifier?: string;
    /**
     * Document type (mandatory for Dominican Republic and United States)
     */
    documentType?: string;
    /**
     * Physical address (mandatory for United States)
     */
    address?: {
      streetLine1: string;
      streetLine2?: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
    /**
     * Account holder (mandatory for United States and SEPA countries)
     */
    accountHolder?: {
    /**
     * Type (BUSINESS or INDIVIDUAL)
     */
      type: string,
    /**
     * Name of the account holder
     */
      name: string,
    }
  };
};

