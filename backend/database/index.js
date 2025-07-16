import mysql from "mysql2/promise";

const connectDB = async () => {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD || "password",
    database: "tms",
  });

  return db;
};

export default connectDB;
