const db = require("../config/db");


exports.createUser = async(email, password) =>{
    const sql = ("INSERT INTO basice_login_tb (email, password) VALUES(?,?)");
    const [result] = await db.query(sql, [email, password]);
    return result;
}