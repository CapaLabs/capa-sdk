import { country, documentType } from './Const';

export type UploadPartnerOwnKYCBody = {
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
   * The userId we gave to the partner when they onboarded their user with us
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
   * The type of document the user is uploading
   *
   * @description The documentType must be a valid DOCUMENT_TYPE, see:
   * @link {@link RawSupportedDocumentType}
   */
  documentType: documentType;
};
