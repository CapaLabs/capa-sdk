
/**
 * Identifier for the fiat currency which the user will rec.
 */
export enum fiatCurrency {
    MXN = 'MXN',
    DOP = 'DOP',
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