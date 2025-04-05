import db from "../database/index.js"

const Trip = async(req, res)=>{
    const {pickup, destination, estimatedPrice, distance} = req.body;

    if (!pickup || !destination) {
      res.status(400).json({Error: "All fields are requierd"});
    }else{
      res.status(200).json({Result: "Ride book Sucessfully..."})
    }

    console.log(req.body);
    
}

export default Trip;