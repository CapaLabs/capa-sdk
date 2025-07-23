import type { CreatePartnerUserBody } from '../models/CreatePartnerUserBody';
import type { CreatePartnerUserHttpResponse } from '../models/CreatePartnerUserHttpResponse';
import type { CreateVerificationLinkBody } from '../models/CreateVerificationLinkBody';
import type { GetPartnerDirectLinkHttpResponse } from '../models/GetPartnerDirectLinkHttpResponse';
import type { GetBusinessDirectLinkHttpResponse } from '../models/GetBusinessDirectLinkHttpResponse';
import type { GetDocumentSignatureTemplatesHttpResponse } from '../models/GetDocumentSignatureTemplatesHttpResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { OpenAPIConfig } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {
  constructor(
    private partnerApiKey: string,
    private openApiConfig: OpenAPIConfig
  ) {}

  public createUser(requestBody: CreatePartnerUserBody): CancelablePromise<{
    success?: boolean;
    data?: CreatePartnerUserHttpResponse;
  }> {
    return __request(this.openApiConfig, {
      method: 'POST',
      url: '/api/partner/v2/users',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  public createVerificationLink(
    id: string,
    requestBody: CreateVerificationLinkBody
  ): CancelablePromise<{
    success?: boolean;
    data?: GetPartnerDirectLinkHttpResponse;
  }> {
    return __request(this.openApiConfig, {
      method: 'POST',
      url: '/api/partner/v2/users/{id}/verification-link',
      path: {
        id: id,
      },
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  public generateKybVerificationLink(
    id: string,
    requestBody: CreateVerificationLinkBody
  ): CancelablePromise<{
    success?: boolean;
    data?: GetBusinessDirectLinkHttpResponse;
  }> {
    return __request(this.openApiConfig, {
      method: 'POST',
      url: '/api/partner/v2/users/{id}/kyb-verification-link',
      path: {
        id: id,
      },
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  public getDocumentSignatureTemplates(): CancelablePromise<{
    success?: boolean;
    data?: Array<GetDocumentSignatureTemplatesHttpResponse>;
  }> {
    return __request(this.openApiConfig, {
      method: 'GET',
      url: '/api/partner/v2/users/document-signature-templates',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
    });
  }
}
