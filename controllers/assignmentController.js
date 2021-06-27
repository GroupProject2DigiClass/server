const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Class = require("../schema/classSchema/classSchema");
const postAssignment=require("../schema/assignmentSchemas/postassignment");


//post new assignment 

const postnewassignment = async (req, res) => {
  console.log(req.body);
  const {
    classKey,
    title,
    instruction,
    points,
    dueDate,
    dueTime,
    driveLink,
    
  } = req.body;

  const newPostMessage = new postAssignment({
    classKey,
    title,
    instruction,
    points,
    dueDate,
    dueTime,
    driveLink,
  });

  try {
    await newPostMessage.save();
    const data = { wow: "New Assignment is posted Successfully" };
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//get all assignments of particular subject

const getSubjectassignment = async (req, res) => {
  var data = req.body;
  
  console.log(data.classkey);
  

  try {
    const findResult = await postAssignment.find({ classKey: data.classKey });
    res.status(200).send(findResult);
    console.log(findResult);
  }
  
  catch (error) {
    res.status(409).json({ message: error.message });
  }

};


//get particular assignments of particular subject

const getIndividualSubjectassignment = async (req, res) => {
  var data = req.body;
  
  console.log(data._id);
  

  try {
    const findResult = await postAssignment.find({ _id: data._id });
    res.status(200).send(findResult);
    console.log(findResult);
  }
  
  catch (error) {
    res.status(409).json({ message: error.message });
  }

};

//completed assignment marker



module.exports = { postnewassignment,getSubjectassignment,getIndividualSubjectassignment };
