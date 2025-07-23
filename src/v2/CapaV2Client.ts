import type { OpenAPIConfig } from './core/OpenAPI';
import {
  OffRampService,
  OnRampService,
  QuotesService,
  KycService,
  UsersService,
  WebhookSettingsService,
  TransactionsService,
} from './services';

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
