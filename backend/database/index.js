import mysql from "mysql2/promise";

const connectDB = async () => {
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "student@123",
      database: "tms"
    });

    return db;
};

export default connectDB;


