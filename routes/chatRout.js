const express = require("express");
const { auth } = require("../middleware/auth");
const chatRouter = express.Router();
const {chatauth} = require("../middleware/chatauth");
const {rolloauth}= require("../middleware/rollnoauth");

const { getAllChat, sendChat } = require("../controllers/chatController.js");

chatRouter.post("/",rolloauth, getAllChat);
chatRouter.post("/send",chatauth, sendChat);

module.exports = chatRouter;
