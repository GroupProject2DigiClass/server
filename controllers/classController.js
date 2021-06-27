const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Class = require("../schema/classSchema/classSchema");

const makeNewClassroom = async (req, res) => {
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

  const newClass = new Class({
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
    await newClass.save();
    const data = { message: "New Class Added Successfully" };
    res.status(200).send(data);
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
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getAllClassroom = async (req, res) => {
  try {
    const findResult = await Class.find();
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
