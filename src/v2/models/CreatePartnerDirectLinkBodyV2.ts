import { country } from './Const';

export type CreatePartnerDirectLinkBodyV2 = {
  /**
   * Personal information for regulatory purposes
   */
  personalInfo?: {
    profession?: string;
    phoneNumber?: string;
    birthCountry?: string;
    taxId?: string;
  };
  /**
   * The user id of the partner
   */
  userId: string;
  /**
   * The country code for the partner
   *
   * @description The country must be a valid ISO 3166-1 alpha-2 country code, see:
   * @link https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
   */
  country: country;
  /**
   * The redirect URI for the partner to redirect the user after the KYC process is completed
   */
  partnerRedirectUri?: string;
};
