import { fiatCurrency } from './Const';

export type CreatePartnerCrossRampQuoteResponse = {
  /**
   * Quote identifier
   */
  id: string;
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
   * Exchange rate for the quote
   */
  exchangeRate: number;
  /**
   * Premium spread applied to the quote
   */
  premiumSpread?: number;
  /**
   * Quote expiration timestamp
   */
  expiresAt: string;
  /**
   * Quote creation timestamp
   */
  createdAt: string;
};

