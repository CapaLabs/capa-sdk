import type { CreatePartnerOffRampTransactionV2RequestBody } from '../models/CreatePartnerOffRampTransactionV2RequestBody';
import type { OffRampPartnerV2Response } from '../models/OffRampPartnerV2Response';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { OpenAPIConfig } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OffRampService {
  constructor(
    private partnerApiKey: string,
    private openApiConfig: OpenAPIConfig
  ) {}

  public createPartnerOffRamp(
    requestBody: CreatePartnerOffRampTransactionV2RequestBody
  ): CancelablePromise<{
    success?: boolean;
    data?: OffRampPartnerV2Response;
  }> {
    return __request(this.openApiConfig, {
      method: 'POST',
      url: '/api/partner/v2/off-ramp',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
