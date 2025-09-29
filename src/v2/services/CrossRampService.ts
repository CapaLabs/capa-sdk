import type { CreatePartnerCrossRampTransactionV2RequestBody } from '../models/CreatePartnerCrossRampTransactionV2RequestBody';
import type { CrossRampPartnerV2Response } from '../models/CrossRampPartnerV2Response';
import type { CreatePartnerCrossRampQuoteBody } from '../models/CreatePartnerCrossRampQuoteBody';
import type { CreatePartnerCrossRampQuoteResponse } from '../models/CreatePartnerCrossRampQuoteResponse';
import type { GetPartnerCrossRampQuoteExchangeV2Response } from '../models/GetPartnerCrossRampQuoteExchangeV2Response';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { OpenAPIConfig } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CrossRampService {
  constructor(
    private partnerApiKey: string,
    private openApiConfig: OpenAPIConfig
  ) {}

  /**
   * Create a cross-ramp transaction
   * @param requestBody Transaction details for cross-ramp
   * @returns Promise with transaction response
   */
  public createPartnerCrossRamp(
    requestBody: CreatePartnerCrossRampTransactionV2RequestBody
  ): CancelablePromise<{
    success?: boolean;
    data?: CrossRampPartnerV2Response;
  }> {
    return __request(this.openApiConfig, {
      method: 'POST',
      url: '/api/partner/v2/cross-ramp',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get cross-ramp exchange rate quote
   * @param sourceCurrency The source fiat currency symbol
   * @param targetCurrency The target fiat currency symbol
   * @param sourceAmount The amount of source fiat currency to convert (optional)
   * @param targetAmount The desired amount of target fiat currency to receive (optional)
   * @param premiumSpread Spread percentage to be applied to the exchange rate (optional)
   * @returns Promise with quote rate response
   */
  public getPartnerCrossRampQuoteRate(
    sourceCurrency: 'MXN' | 'DOP' | 'USD' | 'EUR',
    targetCurrency: 'MXN' | 'DOP' | 'USD' | 'EUR',
    sourceAmount?: number,
    targetAmount?: number,
    premiumSpread?: number
  ): CancelablePromise<{
    success?: boolean;
    data?: GetPartnerCrossRampQuoteExchangeV2Response;
  }> {
    return __request(this.openApiConfig, {
      method: 'GET',
      url: '/api/partner/v2/cross-ramp/quotes',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
      query: {
        sourceCurrency: sourceCurrency,
        targetCurrency: targetCurrency,
        sourceAmount: sourceAmount,
        targetAmount: targetAmount,
        premiumSpread: premiumSpread,
      },
    });
  }

  /**
   * Create a cross-ramp quote
   * @param requestBody Quote details for cross-ramp
   * @returns Promise with quote response
   */
  public createPartnerCrossRampQuote(
    requestBody: CreatePartnerCrossRampQuoteBody
  ): CancelablePromise<{
    success?: boolean;
    data?: CreatePartnerCrossRampQuoteResponse;
  }> {
    return __request(this.openApiConfig, {
      method: 'POST',
      url: '/api/partner/v2/cross-ramp/quotes',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}

