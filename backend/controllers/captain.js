import db from "../database/index.js";

const captainSignup = async (req, res) => {
  const { username, mobile_no, car_no, email, password } = req.body;
    console.log(req.body);
  // Basic validation
  if (!username || !mobile_no || !car_no || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Check if the email already exists
    // const [existing] = await db.query(
    //   "SELECT * FROM captains WHERE email = ?",
    //   [email]
    // );

    // if (existing.length > 0) {
    //   return res.status(409).json({ error: "Email already registered." });
    // }

    // Insert new captain into the database
    // await db.query(
    //   "INSERT INTO captains (username, mobile_no, car_no, email, password) VALUES (?, ?, ?, ?, ?)",
    //   [username, mobile_no, car_no, email, password]
    // );

    return res.status(201).json({ message: "Captain registered successfully!" });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default captainSignup;
