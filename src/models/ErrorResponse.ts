import { AppError } from "./AppError";

export class ErrorResponse {
    isSuccess: boolean = false;
    responseBody: AppError;
    constructor(response: AppError) {
        this.responseBody = response;
    }
}