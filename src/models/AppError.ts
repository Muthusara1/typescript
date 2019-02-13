export class AppError {
    errorCode: string;
    errorDescription: string;
    constructor(code: string, description: string) {
        this.errorCode = code;
        this.errorDescription = description;
    }
}
