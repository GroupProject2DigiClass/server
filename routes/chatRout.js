const express = require("express");
const { auth } = require("../middleware/auth");
const chatRouter = express.Router();

const { getAllChat, sendChat } = require("../controllers/chatController.js");

chatRouter.post("/", getAllChat);
chatRouter.post("/send", sendChat);

module.exports = chatRouter;
