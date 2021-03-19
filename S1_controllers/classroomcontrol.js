const express = require( 'express');
const mongoose =require( 'mongoose');
const router = express.Router();
const Class = require("../schema/classSchema/classSchema");

const makenewclassroom = async (req, res) => {
  const { subject_code,teacher,subject_name,subject_type,head_background_color,head_text_color,body_background_color,body_block_color } = req.body;
//console.log(req.body);

 const newPostMessage = new Class({ subject_code,teacher,subject_name,subject_type,head_background_color,head_text_color,body_background_color,body_block_color });

    
  try {
     await newPostMessage.save();
    const data= {wow:"data saved successfully"}

      res.status(200).send(data);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}


const infoaboutclassroom = async (req, res) => {
   const {code } = req.body;
 console.log(req.body);
 
 
 
      
   try {
     
    const findResult = await Class.find({"subject_code": code});
    
 
      
       res.status(200).send(findResult);
   } catch (error) {
       res.status(409).json({ message: error.message });
   }
 }



module.exports={makenewclassroom,infoaboutclassroom};
