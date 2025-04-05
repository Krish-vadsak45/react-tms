import db from "../database/index.js";

const ContactUs = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }

  console.log("Contact Form Submission:", { name, email, subject, message });

  // const query =
  //   "INSERT INTO contact (name, email, subject, message) VALUES (?, ?, ?, ?)";

  // db.query(query, [name, email, subject, message], (err, results) => {
  //   if (err) {
  //     console.error("Error inserting into database:", err);
  //     return res.status(500).json({ error: "Database error." });
  //   }
  //   res
  //     .status(200)
  //     .json({ message: "Message sent successfully!", id: results.insertId });
  // });
};

export default ContactUs;
