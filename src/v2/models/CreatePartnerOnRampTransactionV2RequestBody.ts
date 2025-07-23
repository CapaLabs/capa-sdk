import { blockchainSymbol, fiatCurrency, tokenSymbol } from './Const';

export type CreatePartnerOnRampTransactionV2RequestBody = {
  /**
   * Identifier for the user
   */
  userId: string;
  /**
   * Amount of fiat currency to be converted to crypto currency.
   */
  fiatAmount?: number;
  /**
   * Amount of cryptocurrency to be received in conversion.
   */
  cryptoAmount?: number;
  /**
   * Wallet address of the user making the transaction.
   */
  destinationWalletAddress: string;
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
