export type GetUserVerificationResultHttpResponse = {
    /**
     * @description General result of the verification.
     */
    aipriseSummary?: {
        verificationResult?: string;
    };
    amlInfo: {
        entityHits?: Array<{
            entityType?: string;
            name?: string;
            nameMatchScore?: number;
            alsoKnownAs?: any[];
            amlHits?: any[];
            dateOfBirth?: string;
            dateOfBirthMatchScore?: number;
            id?: string;
            resolutionStatus?: string;
        }>;
        numHits?: number;
        amlHitSummary?: Record<string, any>;
        searchCriteria?: {
            searchTerm?: string;
            fuzzinessScore?: number;
            exactMatch?: boolean;
        };
    };
    clientReferenceData: {
        personalInfo?: {
            profession?: string;
            phoneNumber?: string;
            birthCountry?: string;
            taxId?: string;
        };
    };
    faceLivenessInfo: {
        checkSummary?: Record<string, any>;
        result?: string;
        section_id?: string;
        status?: string;
        statusReasons?: Array<{
            code?: string;
            message?: string;
        }>;
        warnings?: Array<{
            code?: string;
            message?: string;
            warningId?: string;
            resolutionStatus?: string;
        }>;
    };
    faceMatchInfo: {
        faceMatchScore?: number;
        checkSummary?: Record<string, any>;
        result?: string;
        section_id?: string;
        status?: string;
        statusReasons?: Array<{
            code?: string;
            message?: string;
        }>;
        warnings?: Array<{
            code?: string;
            message?: string;
            warningId?: string;
            resolutionStatus?: string;
        }>;
    };
    fraudInsights: {
        relatedSessionInsights?: {
            result?: string;
            section_id?: string;
            status?: string;
            statusReasons?: Array<{
                code?: string;
                message?: string;
            }>;
            warnings?: Array<{
                code?: string;
                message?: string;
                warningId?: string;
                resolutionStatus?: string;
            }>;
        };
        result?: string;
        section_id?: string;
        status?: string;
        statusReasons?: Array<{
            code?: string;
            message?: string;
        }>;
        warnings?: Array<{
            code?: string;
            message?: string;
            warningId?: string;
            resolutionStatus?: string;
        }>;
    };
    idInfo: {
        address?: {
            fullAddress?: string;
        };
        birthDate?: string;
        checkSummary?: Record<string, any>;
        documentDetails?: Record<string, any>;
        firstName?: string;
        idExpiryDate?: string;
        idIssueDate?: string;
        idType?: string;
        idNumber?: string;
        middleName?: string;
        lastName?: string;
        secondLastName?: string;
        fullName?: string;
        gender?: string;
        nationality?: string;
        nationalityCode?: string;
        issueCountry?: string;
        issueCountryCode?: string;
        result?: string;
        section_id?: string;
        status?: string;
        statusReasons?: Array<{
            code?: string;
            message?: string;
        }>;
        warnings?: Array<{
            code?: string;
            message?: string;
            warningId?: string;
            resolutionStatus?: string;
        }>;
    };
    media?: {
        frontIdImageUrl?: string;
        backIdImageUrl?: string;
        selfieImageUrl?: string;
        selfieVideoUrl?: string;
    };
    /**
     * @description Represents the userId in our system, is the same as the one return when each partner create a user.
     */
    clientReferenceId?: string;
    createdAt?: string;
    /**
     * The ID of the verification session. aka `externalResourceId` in our system.
     */
    verificationSessionId?: string;
};

