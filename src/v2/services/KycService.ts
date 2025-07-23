import type { CreatePartnerDirectLinkBodyV2 } from '../models/CreatePartnerDirectLinkBodyV2';
import type { GetPartnerDirectLinkHttpResponseV2 } from '../models/GetPartnerDirectLinkHttpResponseV2';
import type { UploadPartnerOwnKYCBody } from '../models/UploadPartnerOwnKYCBody';
import type { GetUserVerificationResultHttpResponse } from '../models/GetUserVerificationResultHttpResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { OpenAPIConfig } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class KycService {
  constructor(
    private partnerApiKey: string,
    private openApiConfig: OpenAPIConfig
  ) {}

  public generateDirectLink(
    requestBody: CreatePartnerDirectLinkBodyV2
  ): CancelablePromise<{
    status?: string;
    data?: GetPartnerDirectLinkHttpResponseV2;
  }> {
    return __request(this.openApiConfig, {
      method: 'POST',
      url: '/api/partner/v2/kyc/direct-link',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  public uploadFiles(
    requestBody: UploadPartnerOwnKYCBody
  ): CancelablePromise<any> {
    return __request(this.openApiConfig, {
      method: 'POST',
      url: '/api/partner/v2/kyc/upload-files',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  public getUserVerificationDetails(userId: string): CancelablePromise<{
    status?: string;
    data?: GetUserVerificationResultHttpResponse;
  }> {
    return __request(this.openApiConfig, {
      method: 'GET',
      url: '/api/partner/v2/kyc/user/{userId}/verification-details',
      path: {
        userId: userId,
      },
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
    });
  }
}
