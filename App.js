const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const router = require("./routes/assignmentRout");
const dotenv = require("dotenv");
const app = express();
const path = require("path");

const classRouter = require("./routes/classRout");
const lectureRouter = require("./routes/lectureRout");
const chatRouter = require("./routes/chatRout");
const assignmentRouter = require("./routes/assignmentRout");



//for file upload
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid= require("gridfs-stream");
const methodOverride = require("gridfs-stream");
const crypto = require('crypto');//for name change for file
//to be done later on
const practiceRouter = require("./routes/practiceRout");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json());//1
//app.use(methodOverride('_method'));
//app.set('view engine', 'ejs');

//app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());



app.use("/makeclass", classRouter);
app.use("/makelecture",lectureRouter);
app.use("/makechat", chatRouter);

app.use("/makeassignment", assignmentRouter);
app.use("/makepractice", practiceRouter);
app.post("/", (req, res) => {
  console.log(req);
  res.send("Hello to Kamal API");
});

const PORT = process.env.PORT || 5005;

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


