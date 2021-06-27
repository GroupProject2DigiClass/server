const express = require("express");
const Chat = require("../schema/chatSchema/chatSchema");

const getAllChat = async (req, res) => {
  console.log(req.body);
  try {
    const { classKey, rollNo } = req.body;
    const result = await Chat.find({ classKey: classKey });
    var finalResult = [];
    if (rollNo === "TEACHER") {
      for (var i = 0; i < result.length; i++) {
        finalResult.push({
          sender: result[i].sender,
          message: result[i].message,
          time: result[i].time,
        });
      }
    } else {
      for (var i = 0; i < result.length; i++) {
        if (result[i].anonymous) {
          finalResult.push({
            sender: "anonymous",
            message: result[i].message,
            time: result[i].time,
          });
        } else {
          finalResult.push({
            sender: result[i].sender,
            message: result[i].message,
            time: result[i].time,
          });
        }
      }
    }
    console.log(finalResult);
    res.status(200).send(finalResult);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const sendChat = async (req, res) => {
  const newChat = new Chat(req.body);
  console.log(req.body);
  try {
    await newChat.save();
    const data = { message: "New Chat Added Successfully" };
    res.status(200).send(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getAllChat, sendChat };
