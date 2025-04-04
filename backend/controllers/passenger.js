import db from "../database/index.js"

const Passenger = async(req, res)=>{
  const { name, email, mobile, password } = req.body;

  if(!name || !email || !mobile || !password){
    return res.status(400).json({Error: "All fileds are required."});
  }

  console.log(req.body);
  return res.status(200).json({result: "User registered sucessfully."})
  
}

export default Passenger;