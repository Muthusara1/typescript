export class DBQueries {
    // User Manipulation Query
    public static ADD_USER = "INSERT INTO users(USER_NAME,EMAIL_ID,PASSWORD,NAME,DOB,GENDER) VALUES(?,?,?,?,?,?)"; 
    public static GET_USER_DETAILS = "SELECT USER_ID AS userId, PASSWORD AS password, EMAIL_ID AS emailId, GENDER AS gender, DOB AS dob, NAME AS name, USER_NAME AS userName FROM users WHERE EMAIL_ID = ?";  
}