const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "basice_login_db", // make sure this DB exists
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0
});

const testConnection = async () => {
  try {
    const connection = await db.getConnection();
    console.log("Database connected successfully!");
    connection.release();
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

testConnection();

module.exports = db;
