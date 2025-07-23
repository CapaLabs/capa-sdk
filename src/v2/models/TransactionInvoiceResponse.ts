export type TransactionInvoiceResponse = {
  /**
   * The transaction hash in the blockchain
   */
  transactionHash?: string | null;
  /**
   * URL to the payment invoice
   */
  paymentUrl?: string | null;
};
