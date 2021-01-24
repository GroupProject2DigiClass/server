const express = require("express");

const { addUser, addItem } = require("../S1_controllers/userController");

const router = express.Router();

router.post("/addUser", addUser);

router.post("/addItem", addItem);

module.exports = router;
