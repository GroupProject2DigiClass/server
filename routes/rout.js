const express = require("express");
const { auth } = require("../middleware/auth");
const router = express.Router();

const {
  makenewclassroom,
  infoaboutclassroom,
} = require("../controllers/classController.js");

router.post("/", makenewclassroom);
router.post("/info", infoaboutclassroom);

module.exports = router;
