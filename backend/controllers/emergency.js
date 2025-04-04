import db from "../database/index.js"

const Emergency = async(req, res)=>{
    const { location, description } = req.body;

    console.log("Location: ", location );
    console.log("Description: ", description);
    
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "Request body is missing or empty" });
    }  
  
    if (!location || !description) {
      return res.status(400).json({ error: "Location and description are required." });
    }

    return res.status(200).json({result: "Emergency request is noticed"});
  
}

export default Emergency;