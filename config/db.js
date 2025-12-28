const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "basice_login_db", // make sure this DB exists
 
});


  if(!db){
    console.log("database error!")
  }else{
    console.log("database successfully...")
  }
  

module.exports = db;
