export type PartnerWebhookSettingsHttpResponse = {
    /**
     * The entity id.
     */
    id: string;
    /**
     * The id of the partner that can manage these settings.
     */
    partnerId: string;
    /**
     * The url where the partner will receive webhook notifications.
     */
    url: string | null;
    /**
     * The creation date of the entity.
     */
    createdAt: string;
    /**
     * The update date of the entity.
     */
    updatedAt: string;
};

