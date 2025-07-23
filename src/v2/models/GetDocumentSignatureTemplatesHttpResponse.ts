import { docTemplateName, language } from './Const';

export type GetDocumentSignatureTemplatesHttpResponse = {
  /**
   * The name of the document signature template.
   */
  name: docTemplateName;
  /**
   * The language of the document signature template.
   */
  language: language;
  /**
   * The URL of the document signature template.
   */
  url: string;
};
