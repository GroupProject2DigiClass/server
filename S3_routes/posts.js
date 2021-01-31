const express = require("express");

const { addUser, addItem } = require("../S1_controllers/userController");

const router = express.Router();

const { searchit,findcityname,updateliveproduct}  =require( '../S1_controllers/postsController');

router.post("/addUser", addUser);

router.post("/addItem", addItem);

router.get('/search', searchit);
//router.post('/', createPost);
router.post('/search',searchit);

router.post('/cityname',findcityname);

router.post('/updateliveproduct',updateliveproduct);

module.exports = router;
