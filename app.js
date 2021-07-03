const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const classRouter = require("./routes/classRout");
const lectureRouter = require("./routes/lectureRout");
const chatRouter = require("./routes/chatRout");
const assignmentRouter = require("./routes/assignmentRout");
const practiceRouter = require("./routes/practiceRout");
const fileRouter = require("./routes/fileRout");
const fileUpload = require("express-fileupload");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());
app.use("/makeclass", classRouter);
app.use("/makelecture", lectureRouter);
app.use("/makechat", chatRouter);
app.use("/makeassignment", assignmentRoute;
app.use("/makepractice", practiceRouter);
app.use("/files", fileRouter);

app.get("/", (req, res) => {
  res.send("Hello to Kamal API");
});
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

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
