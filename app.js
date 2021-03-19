//import  React from "react";
//const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const {router} = require("./S3_routes/posts");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
 
app.use('/post', router); 

app.get("/", (req, res) => {
  res.send("Hello to memories API");
});

const uri = "mongodb+srv://shoponline:Greendigital@cluster0.z6wbp.mongodb.net/dbname?retryWrites=true&w=majority";
//const CONNECTION_URL = 'mongodb://localhost:27017/listdb';

const PORT = process.env.PORT || 5005;

mongoose
  .connect(uri, {
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
