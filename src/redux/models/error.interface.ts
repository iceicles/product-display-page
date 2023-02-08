export interface iCdsErrorResponse {
    correlationId: string;
    errors: string[];
    isCdsError: boolean;
    message: string;
    requestId: string;
    statusCode: number;
}

export interface customFetchBaseQueryError {
    status: number;
    data: iCdsErrorResponse;
}