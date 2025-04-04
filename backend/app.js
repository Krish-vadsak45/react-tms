import express from "express";
import connectDB from "./database/index.js";
// import passengerTable from "./models/passenger.model.js"
import dotenv from "dotenv";
import routes from "./routes/route.js";
import cors from "cors";

const app = express();
dotenv.config({
    path: "./env"
})

connectDB()
.then(()=>{
    console.log("Connect with MYSQL!");
    
})
.catch((err)=>{
    console.log("Error: Database connection failed",err);
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.use("/api/data/",routes);

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server running on ",process.env.PORT || 5000);
    
});