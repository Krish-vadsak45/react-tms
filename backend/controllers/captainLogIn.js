import db from "../database/index.js"

const CaptainLogIn = async(req, res)=>{
  const { email, password } = req.body;
  console.log(req.body);

  if(!email || !password){
    return res.status(400).json({Error: "All fileds are required..."});
  }else{
    return res.status(200).json({result: "User Logged sucessfully."})
  }

}

export default CaptainLogIn;