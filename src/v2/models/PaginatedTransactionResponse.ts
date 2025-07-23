import type { TransactionResponseData } from './TransactionResponseData';
export type PaginatedTransactionResponse = {
  /**
   * Total count of transactions matching the query
   */
  count: number;
  /**
   * Array of transaction data
   */
  data: Array<TransactionResponseData>;
};
