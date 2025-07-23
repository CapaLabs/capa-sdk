import type { GetPartnerQuoteExchangeV2Response } from '../models/GetPartnerQuoteExchangeV2Response';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { OpenAPIConfig } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QuotesService {
  constructor(
    private partnerApiKey: string,
    private openApiConfig: OpenAPIConfig
  ) {}

  public getPartnerQuoteRate(
    tokenSymbol:
      | 'USDC'
      | 'USDT'
      | 'MXNe'
      | 'SOL'
      | 'ETH'
      | 'wBTC'
      | 'cbBTC'
      | 'PYSUD'
      | 'POL'
      | 'BNB'
      | 'WLD'
      | 'STK'
      | 'USDY'
      | 'USDC.e'
      | 'wUSDL'
      | 'MATIC'
      | 'USDbC',
    transactionType: 'ON_RAMP' | 'OFF_RAMP',
    blockchainSymbol:
      | 'POL'
      | 'SOL'
      | 'BASE'
      | 'ARB'
      | 'BSC'
      | 'OP'
      | 'WLD'
      | 'STK'
      | 'ETH'
      | 'MTN',
    fiatCurrency: 'MXN' | 'DOP',
    cryptoAmount?: number,
    fiatAmount?: number,
    premiumSpread?: number
  ): CancelablePromise<{
    success?: boolean;
    data?: GetPartnerQuoteExchangeV2Response;
  }> {
    return __request(this.openApiConfig, {
      method: 'GET',
      url: '/api/partner/v2/quotes',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
      query: {
        tokenSymbol: tokenSymbol,
        transactionType: transactionType,
        blockchainSymbol: blockchainSymbol,
        fiatCurrency: fiatCurrency,
        cryptoAmount: cryptoAmount,
        fiatAmount: fiatAmount,
        premiumSpread: premiumSpread,
      },
    });
  }
}
