import db from "../database/index.js"

const Passenger = async(req, res)=>{
    console.log("Received Emergency Request:", req.body);

    const { location, description } = req.body;
    
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "Request body is missing or empty" });
    }
  
  
    if (!location || !description) {
      return res.status(400).json({ error: "Location and description are required." });
    }
  
    console.log("Location:", location);
    console.log("Description:", description);
  
}

export default Passenger;