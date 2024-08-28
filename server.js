import express,{Request,Response} from "express";
import dotenv from "dotenv";



const express = require("express");
const PORT = 4000;
const app = express();

app.listen(PORT,()=>{
  console.log(`Server Running on PORT : ${PORT}`);
});

app.use(express.json);

app.get("/",(req,res)=>{
  try{
    return res.status(200).json({message:"Welcome!"});
  }
  catch(error){
    return res.status(500).json({
      message:"Server Error!"
    })
  }

})
