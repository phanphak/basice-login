const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "basice_login_db",
  
});

if(!db){
    console.log("database error!")
}else{
    console.log("database connection");
}
    
// (async () => {
//   try {
//     const connection = await db.getConnection();
//     console.log("✅ Database connected successfully");
//     connection.release();
//   } catch (err) {
//     console.error("❌ Database connection failed:", err.message);
//   }
// })();

module.exports = db;
