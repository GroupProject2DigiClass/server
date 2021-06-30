const File = require("../schema/fileSchema/fileSchema");

const zeroPad = (num, places) => String(num).padStart(places, "0");

const addFile = async (req, res) => {
  //   console.log(req.files.file.name);
  try {
    const file = req.files.file;
    // console.log(typeof file);

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    month = zeroPad(month, 2);
    var day = today.getDate();
    day = zeroPad(day, 2);
    var hour = today.getHours();
    hour = zeroPad(hour, 2);
    var min = today.getMinutes();
    min = zeroPad(min, 2);
    var sec = today.getSeconds();
    sec = zeroPad(sec, 2);
    var code = file.name;
    var Key =
      code +
      ":" +
      year +
      ":" +
      month +
      ":" +
      day +
      ":" +
      hour +
      ":" +
      min +
      ":" +
      sec;

    const newFile = new File({ file: file, name: file.name, key: Key });
    var val = await newFile.save();
    // console.log(val._id);
    res.status(200).send({ fileName: file.name, _id: val._id });
  } catch (error) {
    res.status(409).send(err);
  }
};

const getGivenFile = async (req, res) => {
  console.log(req.body);
  const { _id } = req.body;
  try {
    const result = await File.find({ _id: _id });
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteGivenFile = async (req, res) => {
  console.log(req.body);
  const { _id } = req.body;
  try {
    const result = await File.findByIdAndDelete(_id);
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = {
  addFile,
  getGivenFile,
  deleteGivenFile,
};
