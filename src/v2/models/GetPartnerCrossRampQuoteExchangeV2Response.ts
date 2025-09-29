import { fiatCurrency } from './Const';

export type GetPartnerCrossRampQuoteExchangeV2Response = {
  /**
   * Source fiat currency symbol
   */
  sourceCurrency: fiatCurrency;
  /**
   * Target fiat currency symbol
   */
  targetCurrency: fiatCurrency;
  /**
   * Amount of source fiat currency
   */
  sourceAmount: number;
  /**
   * Amount of target fiat currency
   */
  targetAmount: number;
  /**
   * Exchange rate between currencies
   */
  exchangeRate: number;
  /**
   * Premium spread applied to the rate
   */
  premiumSpread?: number;
  /**
   * Timestamp when the rate was calculated
   */
  timestamp: string;
};

