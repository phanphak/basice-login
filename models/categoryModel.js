const db = require("../config/db");

exports.getAll = async () =>{
    const sql = ("SELECT * FROM category_tb")
    const [result] = await db.query(sql);
    return result;
}


// create new data  or post newdata
exports.create = async (name, price, category, description) =>{
    const sql = ("INSERT INTO category_tb (name, price, category, description ) VALUES(?,?,?,?)");
    const result = await db.query(sql, [name, price, category,description])
    return result;
}