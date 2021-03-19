const express = require( 'express');
const mongoose =require( 'mongoose');
const router = express.Router();


const findcityname = async (req, res) => {
 // const { state } = req.body;
//console.log(req.body);

// const newPostMessage = new PostMessage({ state,city,tool })
console.log("hi from backend my password is 333444");
     
  try {
    // await newPostMessage.save();
    const data= {wow:"okok"}
    
    
     console.log("hi from backend my password is 333444");
     
      res.status(200).send(data);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}


const registeruserok = async (req, res) => {
  // const { state } = req.body;
 console.log(req.body);
 
 // const newPostMessage = new PostMessage({ state,city,tool })
 
      
   try {
     // await newPostMessage.save();
     const data= {wow:"okok"}
     
     
      console.log("hi from backend my password is 333444");
      
       res.status(200).send(data);
   } catch (error) {
       res.status(409).json({ message: error.message });
   }
 }



module.exports={findcityname,registeruserok};
