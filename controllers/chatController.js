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
          email: result[i].email,
        });
      }
    } else {
      console.log("--------------------------");
      console.log(rollNo);
      
      for (var i = 0; i < result.length; i++) {
        if (result[i].anonymous) {
          finalResult.push({
            sender: "anonymous",
            message: result[i].message,
            time: result[i].time,
            email: result[i].email,
          });
        } else {
          finalResult.push({
            sender: result[i].sender,
            message: result[i].message,
            time: result[i].time,
            email: result[i].email,
          });
        }
      }
    }
    console.log("--------------------------executed--------------------");
    console.log(finalResult);
    
    res.status(200).send(finalResult);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const sendChat = async (req, res) => {
  
  
  req.body.sender=req.sender;
  req.body.email=req.userId;
  console.log(req.body);
  const newChat = new Chat(req.body);

  try {
    await newChat.save();
    const data = { message: "New Chat Added Successfully" };
    res.status(200).send(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getAllChat, sendChat };
