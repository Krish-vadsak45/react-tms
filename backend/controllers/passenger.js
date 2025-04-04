import db from "../database/index.js"

const Passenger = async(req, res)=>{
  const { email, username, password, mobile} = req.body;
  console.log(req.body);

  if(!username || !email || !mobile || !password){
    return res.status(400).json({Error: "All fileds are required..."});
  }else{
    return res.status(200).json({result: "User registered sucessfully."})

  }

  
}

export default Passenger;