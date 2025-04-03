import db from "../database/index.js"

const Captain = async(req, res)=>{
    const {name, email, mobile, plate, password} = req.body;

    console.log(req.body);
    
  
}

export default Captain;