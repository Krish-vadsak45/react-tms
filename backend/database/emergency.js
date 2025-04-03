import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", methods: "POST" }));

// MySQL Connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "student@123", // Update with your MySQL password
  database: "tms",
});

connection.connect((err) => {
  if (err) {
    console.error(" MySQL Connection Failed:", err.message);
    return;
  }
  console.log(" Connected to MySQL Database");
});

// API Endpoint to Handle Emergency Reports
app.post("/emergency", (req, res) => {
  console.log("Received Emergency Request:", req.body);

  const { location, description } = req.body;

  if (!location || !description) {
    return res.status(400).json({ error: "Location and description are required." });
  }
  console.log(location)
  console.log(description)
  // Insert into MySQL
//   const query = "INSERT INTO emergency (location, description) VALUES (?, ?)";
//   connection.query(query, [location, description], (err, results) => {
//     if (err) {
//       console.error(" Error inserting into database:", err);
//       return res.status(500).json({ error: "Database error." });
//     }
//     res.status(200).json({ message: "Emergency reported successfully!", id: results.insertId });
//   });
});

// Start Server
app.listen(port, () => {
  console.log(` Server running on http://localhost:${port}`);
});
