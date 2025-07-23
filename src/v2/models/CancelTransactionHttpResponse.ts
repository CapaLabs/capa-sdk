export type CancelTransactionHttpResponse = {
  /**
   * The identifier for the transaction.
   */
  id: string;
  /**
   * User identifier making the transaction.
   */
  userId: string;
  /**
   * Transaction status.
   */
  status: string;
};
