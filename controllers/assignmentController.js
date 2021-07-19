const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Class = require("../schema/classSchema/classSchema");
const postAssignment = require("../schema/assignmentSchemas/postassignment");


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
    const data = "New Assignment is posted Successfully";
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
    const findResult = await postAssignment.find({ _id: data._id }, { files: 0 });
    res.status(200).send(findResult);
    console.log(findResult);
  }

  catch (error) {
    res.status(409).json({ message: error.message });
  }

};

//completed assignment marker




//deelte particular class assignment

const deleteAssignment = async (req, res) => {
  var data = req.body;

  console.log(data._id);


  try {
    const findResult = await postAssignment.deleteOne({ _id: data._id });
    res.status(200).send("Assignment deleted successfully");
    console.log(findResult);
  }

  catch (error) {
    res.status(409).json({ message: error.message });
  }

};



const saveIndividualAssStudentDrivelink = async (req, res) => {
  var data = req.body;


  try {
    console.log("wowowwoowowwowowowowowowow");
    console.log(req.body);
    console.log(req.userId);

    const findResult1 = await postAssignment.find({ "_id": data._id, "files.email": req.userId, });
    console.log("........................");
    console.log(findResult1);

    if (findResult1.length == 0) {
      console.log("ohohoohohho................");
      var today = new Date();
      var day1 = today.getDate();
      var month = today.getMonth() + 1;
      var year = today.getFullYear();
      var duedatesendor = data.duedate;
      var duetimesendor = data.duetime;


//for time 
var hour = today.getHours();
var minute = today.getMinutes();

      var key = duedatesendor.split("-");
      var keytime=duetimesendor.split(":");

     var v1 = year * 10000 + month * 100 + day1;

     var v2 = parseInt(key[0]) * 10000 + parseInt(key[1]) * 100 + parseInt(key[2]);
     console.log(v2);
     
     var v3=v1*1000000+hour*10000+minute*100;
     console.log(v3);
     var v4=v2*1000000+parseInt(keytime[0])*10000+parseInt(keytime[1])*100;

     


      console.log(key);
      console.log(month);
      var flag = "";
      if (v3<=v4) {
        flag = "Ontime";

      }
      else{
        flag = "LateSubmission";
      }



      const findResult = await postAssignment.updateMany({ _id: data._id }, { $push: { files: { email: req.userId, driveLink: data.profileLink, flagt: flag } } });
      console.log(findResult);
      res.send("link posted successfully");
    }
    else if (findResult1.length != 0) {
      console.log("1111111111111111ohohoohohho................");
      res.send("link already posted");
    }



  }

  catch (error) {
    res.status(409).json(error.message);
  }

};


const getAllAssignmentdrivelink = async (req, res) => {
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

module.exports = { postnewassignment, getSubjectassignment, getIndividualSubjectassignment, deleteAssignment, saveIndividualAssStudentDrivelink, getAllAssignmentdrivelink };
