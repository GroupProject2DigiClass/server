//import  React from "react";
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const router = require("./S3_routes/posts");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", router);
app.get("/", (req, res) => {
  res.send("Hello to memories API");
});

//const CONNECTION_URL = 'mongodb://localhost:27017/listdb';

const PORT = process.env.PORT || 5003;

mongoose
  .connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
