import db from "../database/index.js";

const Emergency = async (req, res) => {
  const {
    currentlocation,
    destinationlocation,
    description,
  } = req.body;

  console.log("Received Emergency:", req.body);

  if (!req.body || Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ error: "Request body is missing or empty" });
  }

  if (!currentlocation || !description || !destinationlocation) {
    return res
      .status(400)
      .json({ error: "Location and description are required." });
  }

  // try {
  //   const query = `
  //     INSERT INTO emergency_alerts (currentlocation, destinationlocation, description)
  //     VALUES (?, ?, ?)
  //   `;
  //   const values = [currentlocation, destinationlocation, description];

  //   await db.execute(query, values);

  //   return res.status(200).json({ result: "Emergency request is noticed" });
  // } catch (error) {
  //   console.error("Database insert error:", error);
  //   return res
  //     .status(500)
  //     .json({ error: "Database error while logging emergency" });
  // }
};

export default Emergency;
