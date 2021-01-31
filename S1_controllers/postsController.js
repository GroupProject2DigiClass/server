const express = require( 'express');
const mongoose =require( 'mongoose');

const PostMessage =require( '../S2_Schemas/searchSchema');
const Item=require('../S2_Schemas/itemSchema');
const router = express.Router();



const searchit = async (req, res) => {
    const { state,city,tool } = req.body;
console.log(req.body);
console.log(city);
  // const newPostMessage = new PostMessage({ state,city,tool })

    try {
      // await newPostMessage.save();
      const data= await Item.find({"state": state});

       console.log(data);
       
        res.status(200).send(data);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const findcityname = async (req, res) => {
  const { state } = req.body;
console.log(req.body);

// const newPostMessage = new PostMessage({ state,city,tool })

  try {
    // await newPostMessage.save();
    const data= await Item.find({"state": state},'city');

     console.log(data);
     
      res.status(200).send(data);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}

const updateliveproduct=async (req, res) => {
  const  pid  = req.body.value;
//console.log(req.body.value);


// const newPostMessage = new PostMessage({ state,city,tool })

  try {
    // await newPostMessage.save();
    const data= await Item.find({"pid": pid});

     console.log(data);
     
      res.status(200).send(data);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}


module.exports={searchit,findcityname,updateliveproduct};
