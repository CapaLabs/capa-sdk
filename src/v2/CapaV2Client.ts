import type { CreatePartnerOffRampTransactionV2RequestBody } from './models/CreatePartnerOffRampTransactionV2RequestBody';
import type { CreatePartnerOnRampTransactionV2RequestBody } from './models/CreatePartnerOnRampTransactionV2RequestBody';
import type { OffRampPartnerV2Response } from './models/OffRampPartnerV2Response';
import type { OnRampPartnerV2Response } from './models/OnRampPartnerV2Response';
import type { GetPartnerQuoteExchangeV2Response } from './models/GetPartnerQuoteExchangeV2Response';
import type { CreatePartnerDirectLinkBodyV2 } from './models/CreatePartnerDirectLinkBodyV2';
import type { GetPartnerDirectLinkHttpResponseV2 } from './models/GetPartnerDirectLinkHttpResponseV2';
import type { GetUserVerificationResultHttpResponse } from './models/GetUserVerificationResultHttpResponse';
import type { UploadPartnerOwnKYCBody } from './models/UploadPartnerOwnKYCBody';
import type { CreatePartnerUserBody } from './models/CreatePartnerUserBody';
import type { CreatePartnerUserHttpResponse } from './models/CreatePartnerUserHttpResponse';
import type { CreateVerificationLinkBody } from './models/CreateVerificationLinkBody';
import type { GetBusinessDirectLinkHttpResponse } from './models/GetBusinessDirectLinkHttpResponse';
import type { GetDocumentSignatureTemplatesHttpResponse } from './models/GetDocumentSignatureTemplatesHttpResponse';
import type { GetPartnerDirectLinkHttpResponse } from './models/GetPartnerDirectLinkHttpResponse';
import type { PartnerWebhookSettingsHttpResponse } from './models/PartnerWebhookSettingsHttpResponse';
import type { UpdatePartnerWebhookSettingsBody } from './models/UpdatePartnerWebhookSettingsBody';
import type { CancelTransactionHttpResponse } from './models/CancelTransactionHttpResponse';
import type { PaginatedTransactionResponse } from './models/PaginatedTransactionResponse';
import type { CancelablePromise } from './core/CancelablePromise';
import type { OpenAPIConfig } from './core/OpenAPI';
import { request as __request } from './core/request';

export interface CapaClientConfig {
  baseUrl: string;
  partnerApiKey: string;
}

export interface CapaClientServices {
  offRamp: OffRampService;
  onRamp: OnRampService;
  quotes: QuotesService;
  kyc: KycService;
  users: UsersService;
  webhookSettings: WebhookSettingsService;
  transactions: TransactionsService;
}

export class CapaV2Client {
  private baseUrl: string;
  private partnerApiKey: string;

  public offRamp: OffRampService;
  public onRamp: OnRampService;
  public quotes: QuotesService;
  public kyc: KycService;
  public users: UsersService;
  public webhookSettings: WebhookSettingsService;
  public transactions: TransactionsService;

  constructor(config: CapaClientConfig) {
    this.baseUrl = config.baseUrl;
    this.partnerApiKey = config.partnerApiKey;

    const openApiConfig: OpenAPIConfig = {
      BASE: this.baseUrl,
      VERSION: '2',
      WITH_CREDENTIALS: false,
      CREDENTIALS: 'include',
      TOKEN: undefined,
      USERNAME: undefined,
      PASSWORD: undefined,
      HEADERS: undefined,
      ENCODE_PATH: undefined,
    };

    this.offRamp = new OffRampService(this.partnerApiKey, openApiConfig);
    this.onRamp = new OnRampService(this.partnerApiKey, openApiConfig);
    this.quotes = new QuotesService(this.partnerApiKey, openApiConfig);
    this.kyc = new KycService(this.partnerApiKey, openApiConfig);
    this.users = new UsersService(this.partnerApiKey, openApiConfig);
    this.webhookSettings = new WebhookSettingsService(
      this.partnerApiKey,
      openApiConfig
    );
    this.transactions = new TransactionsService(
      this.partnerApiKey,
      openApiConfig
    );
  }
}

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
      | 'CORE'
      | 'USDC.e'
      | 'wUSDL'
      | 'CoreBTC'
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
      | 'MTN'
      | 'CORE',
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
      url: '/api/partner/v2/kyc/verification-link',
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
      url: '/api/partner/v2/kyc/send-verification',
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
      url: '/api/partner/v2/kyc/details',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
      query: {
        userId: userId,
      },
    });
  }
}

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
      url: '/api/partner/v2/users/{id}/kyc/verification-link',
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
      url: '/api/partner/v2/users/{id}/kyb/verification-link',
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
      url: '/api/partner/v2/users/{id}/agreements',
      headers: {
        'partner-api-key': this.partnerApiKey,
      },
    });
  }
}

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
    id?: string,
    status?:
      | 'FAILED'
      | 'COMPLETED'
      | 'PENDING'
      | 'PENDING_PAYMENT'
      | 'FIAT_PAYMENT_RECEIVED'
      | 'FIAT_RECEIVED'
      | 'CRYPTO_RECEIVED'
      | 'CRYPTO_NOT_RECEIVED'
      | 'COMPLETED_CRYPTO_RECEIVAL'
      | 'EXPIRED'
      | 'CANCELLED'
      | 'IN_PROGRESS'
      | 'BANK_TRANSFER_PENDING'
      | 'READY_BANK_TRANSFER'
      | 'AWAITING_MANUAL_CRYPTO_TRANSFER'
      | 'AWAITING_MANUAL_FIAT_TRANSFER',
    type?: 'ON_RAMP' | 'OFF_RAMP',
    fiatCurrency?: 'MXN' | 'DOP',
    userId?: string,
    partnerId?: string,
    skip?: number,
    limit?: number,
    sortBy?: string,
    sortOrder?: 'asc' | 'desc'
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
        id: id,
        status: status,
        type: type,
        fiatCurrency: fiatCurrency,
        userId: userId,
        partnerId: partnerId,
        skip: skip,
        limit: limit,
        sortBy: sortBy,
        sortOrder: sortOrder,
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
