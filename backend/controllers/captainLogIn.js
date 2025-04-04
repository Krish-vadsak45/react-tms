import db from "../database/index.js"

const CaptainLogIn = async(req, res)=>{
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }

  // const query = "SELECT * FROM captains WHERE email = ? AND password = ?";
  // db.query(query, [email, password], (err, results) => {
  //   if (err) {
  //     console.error("Login error:", err);
  //     return res.status(500).json({ error: "Server error" });
  //   }

  //   if (results.length > 0) {
  //     return res.status(200).json({ message: "Login successful", captain: results[0] });
  //   } else {
  //     return res.status(401).json({ error: "Invalid email or password" });
  //   }
  // });

}

export default CaptainLogIn;