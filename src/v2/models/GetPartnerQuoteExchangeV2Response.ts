import {
  blockchainSymbol,
  fiatCurrency,
  tokenSymbol,
  transactionFlow,
  transactionType,
} from './Const';

export type GetPartnerQuoteExchangeV2Response = {
  /**
   * Amount to be exchanged in fiat (DOP or MXN)
   */
  fiatAmount: number;
  /**
   * This field refers to the currency that user will sent
   */
  fiatCurrency: fiatCurrency;
  /**
   * This field represents the blockchain symbol
   */
  blockchainSymbol: blockchainSymbol;
  /**
   * This field refers to the token symbol that user will received
   */
  tokenSymbol: tokenSymbol;
  /**
   * Transaction type
   */
  transactionType: transactionType;
  /**
   * Amount the user would received in crypto
   */
  cryptoAmount: number;
  /**
   * Sell exchange rate used to buy usdc
   */
  rate: number;
  /**
   * Premium spread
   */
  premiumSpread?: number;
  /**
   * Transaction flow based on the amount
   */
  flow: transactionFlow;
};
