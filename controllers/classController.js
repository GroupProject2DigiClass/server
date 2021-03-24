const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Class = require("../schema/classSchema/classSchema");

const makenewclassroom = async (req, res) => {
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

  const newPostMessage = new Class({
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
    await newPostMessage.save();
    const data = { wow: "New Class Added Successfully" };
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const infoaboutclassroom = async (req, res) => {
  const { code } = req.body;
  console.log(req.body);

  try {
    const findResult = await Class.find({ subjectCode: code });

    res.status(200).send(findResult);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { makenewclassroom, infoaboutclassroom };
