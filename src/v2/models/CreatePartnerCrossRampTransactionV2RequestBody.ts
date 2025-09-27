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
  };
};
