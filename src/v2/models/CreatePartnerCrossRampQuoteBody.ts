import { fiatCurrency } from './Const';

export type CreatePartnerCrossRampQuoteBody = {
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
};
