import { DESTRUCTION } from "dns";

export class ErrorConstants {
    public static APP_ERROR = {
        CODE: "ERR_APP_ERROR",
        DESCRIPTION: "An error occurred during REST Call"
    };
    public static USER_NOT_FOUND = {
        CODE: "ERR_USER_NOT_FOUND",
        DESCRIPTION: "Invalid Email ID or password"
    };
    public static DATABASE_ERROR = {
        CODE: "ERR_DATABASE_ERROR",
        DESCRIPTION: "Database Problem"
    };


}