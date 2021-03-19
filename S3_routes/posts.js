const express = require("express");
const {auth} = require("../middleware/auth");
const router = express.Router();

const {findcityname,registeruserok} = require("../S1_controllers/postsController");
const {makenewclassroom,infoaboutclassroom} = require("../S1_controllers/classroomcontrol.js");

router.get("/cityname", findcityname);
router.post("/cityname", auth, findcityname);
router.get("/register", findcityname);
router.post("/register", registeruserok);


//making the classroom api call '/makeclass/'
router.post("/",makenewclassroom);
router.post("/info",infoaboutclassroom);

module.exports = router;
