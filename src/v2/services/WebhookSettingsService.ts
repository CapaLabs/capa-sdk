import type { UpdatePartnerWebhookSettingsBody } from '../models/UpdatePartnerWebhookSettingsBody';
import type { PartnerWebhookSettingsHttpResponse } from '../models/PartnerWebhookSettingsHttpResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { OpenAPIConfig } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WebhookSettingsService {
  constructor(
    private partnerApiKey: string,
    private openApiConfig: OpenAPIConfig
  ) {}

  public update(
    requestBody: UpdatePartnerWebhookSettingsBody
  ): CancelablePromise<{
    success?: boolean;
    data?: PartnerWebhookSettingsHttpResponse;
  }> {
    return __request(this.openApiConfig, {
      method: 'PUT',
      url: '/api/partner/v2/webhook-settings',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
