const express = require("express");
const {auth} = require("../middleware/auth");
const router = express.Router();

const {findcityname} = require("../S1_controllers/postsController");

router.get("/cityname", findcityname);

router.post("/cityname", auth, findcityname);


module.exports = {router};
