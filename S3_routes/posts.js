const express = require("express");

const { addUser } = require("../S1_controllers/userController");

const router = express.Router();

router.post("/addUser", addUser);

module.exports = router;
