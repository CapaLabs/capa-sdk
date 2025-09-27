/**
 * Identifier for the fiat currency which the user will rec.
 */
export enum fiatCurrency {
  MXN = 'MXN',
  DOP = 'DOP',
  USD = 'USD',
  EUR = 'EUR',
}

/**
 * Identifier for the blockhain to token from which the conversion will be made.
 */
export enum blockchainSymbol {
  POL = 'POL',
  SOL = 'SOL',
  BASE = 'BASE',
  ARB = 'ARB',
  BSC = 'BSC',
  OP = 'OP',
  WLD = 'WLD',
  STK = 'STK',
  ETH = 'ETH',
  MTN = 'MTN',
  CORE = 'CORE',
}

/**
 * Identifier for the token from which the conversion will be made.
 */
export enum tokenSymbol {
  USDC = 'USDC',
  USDT = 'USDT',
  MXNE = 'MXNe',
  SOL = 'SOL',
  ETH = 'ETH',
  W_BTC = 'wBTC',
  CB_BTC = 'cbBTC',
  PYSUD = 'PYSUD',
  POL = 'POL',
  BNB = 'BNB',
  WLD = 'WLD',
  STK = 'STK',
  USDY = 'USDY',
  CORE = 'CORE',
  USDC_E = 'USDC.e',
  W_USDL = 'wUSDL',
  CORE_BTC = 'CoreBTC',
  MATIC = 'MATIC',
  USDB_C = 'USDbC',
}

/**
 * The country code for the partner
 *
 * @description The country must be a valid ISO 3166-1 alpha-2 country code, see:
 * @link https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
 */
export enum country {
  MX = 'MX',
  DO = 'DO',
}

/**
 * The type of user.
 */
export enum userType {
  INDIVIDUAL = 'INDIVIDUAL',
  BUSINESS = 'BUSINESS',
}

/**
 * The name of the document signature template.
 */
export enum docTemplateName {
  CONTRACT = 'CONTRACT',
  TERMS_AND_CONDITIONS = 'TERMS_AND_CONDITIONS',
}

/**
 * The language of the document signature template.
 */
export enum language {
  ES = 'ES',
  EN = 'EN',
}

/**
 * Transaction type
 */
export enum transactionType {
  ON_RAMP = 'ON_RAMP',
  OFF_RAMP = 'OFF_RAMP',
}

/**
 * Transaction flow based on the amount
 */
export enum transactionFlow {
  OTC = 'OTC',
  PAYMENT = 'PAYMENT',
  REGULAR = 'REGULAR',
}

/**
 * The type of document the user is uploading
 *
 * @description The documentType must be a valid DOCUMENT_TYPE, see:
 * @link {@link RawSupportedDocumentType}
 */
export enum documentType {
  NATIONAL_ID = 'NATIONAL_ID',
  VOTER_ID = 'VOTER_ID',
  PASSPORT = 'PASSPORT',
}

/**
 * Transaction status values
 */
export enum transactionStatus {
  FAILED = 'FAILED',
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
  PENDING_PAYMENT = 'PENDING_PAYMENT',
  FIAT_PAYMENT_RECEIVED = 'FIAT_PAYMENT_RECEIVED',
  FIAT_RECEIVED = 'FIAT_RECEIVED',
  CRYPTO_RECEIVED = 'CRYPTO_RECEIVED',
  CRYPTO_NOT_RECEIVED = 'CRYPTO_NOT_RECEIVED',
  COMPLETED_CRYPTO_RECEIVAL = 'COMPLETED_CRYPTO_RECEIVAL',
  EXPIRED = 'EXPIRED',
  CANCELLED = 'CANCELLED',
  IN_PROGRESS = 'IN_PROGRESS',
  BANK_TRANSFER_PENDING = 'BANK_TRANSFER_PENDING',
  READY_BANK_TRANSFER = 'READY_BANK_TRANSFER',
  AWAITING_MANUAL_CRYPTO_TRANSFER = 'AWAITING_MANUAL_CRYPTO_TRANSFER',
  AWAITING_MANUAL_FIAT_TRANSFER = 'AWAITING_MANUAL_FIAT_TRANSFER',
}

/**
 * Sort order for listing transactions
 */
export enum sortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

/**
 * Interface for listing transactions parameters
 */
export interface ListTransactionsParams {
  /**
   * Transaction ID filter
   */
  id?: string;
  /**
   * Transaction status filter
   */
  status?: transactionStatus;
  /**
   * Transaction type filter
   */
  type?: transactionType;
  /**
   * Fiat currency filter
   */
  fiatCurrency?: fiatCurrency;
  /**
   * User ID filter
   */
  userId?: string;
  /**
   * Partner ID filter
   */
  partnerId?: string;
  /**
   * Number of records to skip for pagination
   */
  skip?: number;
  /**
   * Maximum number of records to return
   */
  limit?: number;
  /**
   * Field to sort by
   */
  sortBy?: string;
  /**
   * Sort order (ascending or descending)
   */
  sortOrder?: sortOrder;
}
