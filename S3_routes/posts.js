const express = require("express");

const { addUser } = require("../S1_controllers/postsController");

const router = express.Router();

router.post("/addUser", addUser);

module.exports = router;
