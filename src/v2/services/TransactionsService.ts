import type { CancelTransactionHttpResponse } from '../models/CancelTransactionHttpResponse';
import type { PaginatedTransactionResponse } from '../models/PaginatedTransactionResponse';
import type { ListTransactionsParams } from '../models/Const';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { OpenAPIConfig } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TransactionsService {
  constructor(
    private partnerApiKey: string,
    private openApiConfig: OpenAPIConfig
  ) {}

  public cancelPartnerTransaction(id: string): CancelablePromise<{
    success?: boolean;
    data?: CancelTransactionHttpResponse;
  }> {
    return __request(this.openApiConfig, {
      method: 'PUT',
      url: '/api/partner/v2/transactions/{id}/cancel',
      path: {
        id: id,
      },
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
    });
  }

  public listPartnerUserTransactions(
    params?: ListTransactionsParams
  ): CancelablePromise<{
    success?: boolean;
    data?: PaginatedTransactionResponse;
  }> {
    return __request(this.openApiConfig, {
      method: 'GET',
      url: '/api/partner/v2/transactions',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
      query: {
        id: params?.id,
        status: params?.status,
        type: params?.type,
        fiatCurrency: params?.fiatCurrency,
        userId: params?.userId,
        partnerId: params?.partnerId,
        skip: params?.skip,
        limit: params?.limit,
        sortBy: params?.sortBy,
        sortOrder: params?.sortOrder,
      },
    });
  }

  public getMockTestingGuide(): CancelablePromise<{
    success?: boolean;
    data?: Record<string, any>;
  }> {
    return __request(this.openApiConfig, {
      method: 'GET',
      url: '/api/partner/v2/transactions/mock-testing-guide',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
    });
  }
}
