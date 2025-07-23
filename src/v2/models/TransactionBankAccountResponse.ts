export type TransactionBankAccountResponse = {
  /**
   * The country of the bank account
   */
  country: string;
  /**
   * The account identifier for the bank account
   */
  accountIdentifier: string | null;
  /**
   * The name of the bank
   */
  bankName?: string | null;
  /**
   * The type of the account
   */
  accountType?: string | null;
  /**
   * Whether the account is verified
   */
  isVerified: boolean;
  /**
   * The document identifier used for verification
   */
  documentIdentifier?: string | null;
};
