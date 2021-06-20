const express = require("express");
const Lecture = require("../schema/lectureSchema/lectureSchema");
const Completed = require("../schema/lectureSchema/completeSchema");

const setStatus = async (req, res) => {
  const { assignmentKey, classKey } = req.body;
  try {
    const newComplete = new Completed({
      assignmentKey,
      classKey,
      completed: [],
      bookmark: [],
    });
    await newComplete.save();
    res.status(200).send({ message: "Done!!!" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getStatus = async (req, res) => {
  console.log(req.body);
  try {
    const { classKey, rollNo } = req.body;
    const result = await Completed.find({ classKey: classKey });
    var finalResult = [];
    for (var i = 0; i < result.length; i++) {
      var tempC = false;
      var tempB = false;
      if (result[i].completed.some((e) => e === rollNo)) tempC = true;
      if (result[i].bookmark.some((e) => e === rollNo)) tempB = true;
      finalResult.push({
        assignmentKey: result[i].assignmentKey,
        completed: tempC,
        bookmark: tempB,
        _id: result[i]._id,
      });
    }
    console.log(finalResult);
    res.status(200).send(finalResult);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const makeNewLecture = async (req, res) => {
  console.log(req.body);
  const {
    classKey,
    assignmentKey,
    title,
    unitN,
    unit,
    topics,
    files,
    completed,
  } = req.body;

  const newLecture = new Lecture({
    classKey,
    assignmentKey,
    title,
    unitN,
    unit,
    topics,
    files,
    completed,
  });

  const newComplete = new Completed({
    assignmentKey,
    classKey,
    completed: [],
    bookmark: [],
  });

  try {
    await newLecture.save();
    await newComplete.save();
    const data = { message: "New Lecture Added Successfully" };
    res.status(200).send(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getAllLectures = async (req, res) => {
  console.log(req.body);
  const { classKey } = req.body;
  try {
    const result = await Lecture.find({ classKey: classKey });
    console.log(result);
    var finalResult = [];
    for (var i = 0; i < result.length; i++) {
      finalResult.push({
        assignmentKey: result[i].assignmentKey,
        title: result[i].title,
        unit: result[i].unit,
        unitN: result[i].unitN,
        completed: result[i].completed,
      });
    }
    console.log(finalResult);
    res.status(200).send(finalResult);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getGivenLecture = async (req, res) => {
  console.log(req.body);
  const { assignmentKey } = req.body;
  try {
    const result = await Lecture.find({ assignmentKey: assignmentKey });
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const setCompletedLecture = async (req, res) => {
  console.log(req.body);
  try {
    const { _id, rollNo } = req.body;
    const presentStatus = await Completed.find({ _id: _id });
    if (presentStatus[0].completed.some((e) => e === rollNo))
      res.status(200).send({ message: "Roll no already present." });
    else {
      var arr = presentStatus[0].completed;
      var assignmentKey = presentStatus[0].assignmentKey;
      arr.push(rollNo);
      await Completed.findOneAndUpdate(
        _id,
        { completed: arr },
        function (error, docs) {
          if (error)
            res
              .status(409)
              .json({ message: error.message, area: "status update" });
          else {
            // res.status(200).send({ message: "Done" });
            console.log(docs);
          }
        }
      );
      await Lecture.updateOne(
        { assignmentKey: assignmentKey },
        { $set: { completed: arr.length } }
      ).then(() => {
        res.status(200).send("Done");
      });
    }
  } catch (error) {
    res.status(409).json({ message: error.message, area: "whole" });
  }
};

const setBookmarkLecture = async (req, res) => {
  console.log(req.body);
  try {
    const { _id, rollNo } = req.body;
    const presentStatus = await Completed.find({ _id: _id });
    if (presentStatus[0].bookmark.some((e) => e === rollNo))
      res.status(200).send({ message: "Roll no already present." });
    else {
      var arr = presentStatus[0].bookmark;
      arr.push(rollNo);
      await Completed.findOneAndUpdate(
        _id,
        { bookmark: arr },
        function (error, docs) {
          if (error) res.status(409).json({ message: error.message });
          else {
            res.status(200).send("Marked");
          }
        }
      );
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteLecture = async (req, res) => {
  console.log(req.body);
  try {
    const { lecture_id, completed_id } = req.body;

    await Lecture.findByIdAndRemove(lecture_id);
    await Completed.findByIdAndRemove(completed_id);
    res.status(200).send({ message: "Lecture Delete" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const editLecture = async (req, res) => {
  console.log(req.body);
  const { _id, newLecture } = req.body;
  try {
    await Lecture.findOneAndUpdate(_id, newLecture, function (error, docs) {
      if (error)
        res.status(409).json({ message: error.message, area: "Status Update" });
      else {
        console.log(docs);
        res.status(200).send({ message: "Lecture Updated" });
      }
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  makeNewLecture,
  getAllLectures,
  getGivenLecture,
  setCompletedLecture,
  setBookmarkLecture,
  getStatus,
  setStatus,
  deleteLecture,
  editLecture,
};
