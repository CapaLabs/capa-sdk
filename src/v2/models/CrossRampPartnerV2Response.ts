import type { BankAccountResponse } from './BankAccountResponse';
import { fiatCurrency } from './Const';

export type CrossRampPartnerV2Response = {
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
   * Amount of source fiat currency involved in the transaction
   */
  sourceAmount: number;
  /**
   * Amount of target fiat currency involved in the transaction
   */
  targetAmount: number;
  /**
   * Exchange rate used for the transaction
   */
  exchangeRate: number;
  /**
   * Source fiat currency symbol
   */
  sourceCurrency: fiatCurrency;
  /**
   * Target fiat currency symbol
   */
  targetCurrency: fiatCurrency;
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
   * Source bank account information
   */
  sourceBankAccount: BankAccountResponse;
  /**
   * Target bank account information
   */
  targetBankAccount: BankAccountResponse;
};

