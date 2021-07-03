const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Class = require("../schema/classSchema/classSchema");

const makeNewClassroom = async (req, res) => {
  console.log(req.body);
  var {
    classKey,
    headBackgroundColor,
    headTextColor,
    bodyBackgroundColor,
    bodyBlockColor,
    subjectCode,
    subjectName,
    subjectType,
    studentAllowed,
    subjectTeacher,
  } = req.body;

//make the students and teacher aarays unique

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

var studentAllowed1=studentAllowed.filter(onlyUnique); 
studentAllowed=studentAllowed1;
  const newClass = new Class({
    classKey,
    headBackgroundColor,
    headTextColor,
    bodyBackgroundColor,
    bodyBlockColor,
    subjectCode,
    subjectName,
    subjectType,
    studentAllowed,
    subjectTeacher,
  });
console.log("--------------------------");
console.log(newClass);


  try {
    await newClass.save();
    const data = { message: "New Class Added Successfully" };
    res.status(200).send("New Class Added Successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const infoAboutClassroom = async (req, res) => {
  const { code } = req.body;
  console.log(req.body);

  try {
    const findResult = await Class.find({ subjectCode: code });

    res.status(200).send(findResult);
  } 
  catch (error) {
    res.status(409).json({ message: error.message });
  }
};

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

const getAllClassroom = async (req, res) => {
 // console.log(req.userId);
  

  try {
    const findResult = await Class.find({studentAllowed:req.userId});
    res.status(200).send(findResult);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const editClassroom = async (req, res) => {
  console.log(req.body);
  const {
    classKey,
    headBackgroundColor,
    headTextColor,
    bodyBackgroundColor,
    bodyBlockColor,
    subjectCode,
    subjectName,
    subjectType,
    studentsAllowed,
    subjectTeacher,
  } = req.body;

  const editClass = new Class({
    classKey,
    headBackgroundColor,
    headTextColor,
    bodyBackgroundColor,
    bodyBlockColor,
    subjectCode,
    subjectName,
    subjectType,
    studentsAllowed,
    subjectTeacher,
  });
  try {
    await editClass.edit();
    const data = { message: "Class Edited Successfully" };
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  makeNewClassroom,
  infoAboutClassroom,
  editClassroom,
  getAllClassroom,
};
