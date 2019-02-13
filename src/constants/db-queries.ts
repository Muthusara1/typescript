export class DBQueries {
    //about queries
    public static GET_ABOUT = "SELECT USER_ID AS userId, ABOUT AS about FROM user_about WHERE USER_ID = ? AND STATUS = 1";

}