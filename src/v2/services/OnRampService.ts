import type { CreatePartnerOnRampTransactionV2RequestBody } from '../models/CreatePartnerOnRampTransactionV2RequestBody';
import type { OnRampPartnerV2Response } from '../models/OnRampPartnerV2Response';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { OpenAPIConfig } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OnRampService {
  constructor(
    private partnerApiKey: string,
    private openApiConfig: OpenAPIConfig
  ) {}

  public createPartnerOnRamp(
    requestBody: CreatePartnerOnRampTransactionV2RequestBody
  ): CancelablePromise<{
    success?: boolean;
    data?: OnRampPartnerV2Response;
  }> {
    return __request(this.openApiConfig, {
      method: 'POST',
      url: '/api/partner/v2/on-ramp',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
