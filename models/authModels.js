const db = require("../config/db");


exports.createUser = async (email, password) =>{
    const sql = ("INSERT INTO basice_login_tb (email, password) VALUES(?,?)");
    const [result] = await db.query(sql, [email, password]);
    return result;

}



exports.findemail = async (email) =>{
    const sql = ("SELECT * FROM basice_login_tb WHERE email = ?");
    const [result] = await db.query(sql, [email]);
    return result[0];
}



