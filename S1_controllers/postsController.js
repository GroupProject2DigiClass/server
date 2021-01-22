const express = require("express");
const mongoose = require("mongoose");
const User = require("../S2_Schemas/postsSchema");

const router = express.Router();

const addUser = async (req, res) => {
  const user = req.body;
  console.log(req.body.name);
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      city: req.body.city,
      state: req.body.state,
      password: req.body.password,
    });
    const createUser = newUser.save();
    return res.send({
      _id: createUser._id,
      name: createUser.name,
      email: createUser.email,
      city: createUser.city,
      state: createUser.state,
      password: user.password,
    });
  } catch (e) {
    return res.send({ message: e.message });
  }
};

module.exports = { router, addUser };
