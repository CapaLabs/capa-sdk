export type UpdatePartnerWebhookSettingsBody = {
  /**
   * the url where the webhook notifications will be sent to. To reset the value `null` can be sent in the body.
   */
  url: string | null;
};
