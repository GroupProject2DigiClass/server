const Practice = require("../schema/preacticeSchema/practiceSchema");

const getAllPractice = async (req, res) => {
  console.log(req.body);
  const { classKey } = req.body;
  try {
    const result = await Practice.find({ classKey: classKey });
    console.log(result);
    var finalResult = [];
    for (var i = 0; i < result.length; i++) {
      finalResult.push({
        assignmentKey: result[i].assignmentKey,
        unit: result[i].unit,
        unitN: result[i].unitN,
        title: result[i].title,
      });
    }
    console.log(finalResult);
    res.status(200).send(finalResult);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const makeNewPractice = async (req, res) => {
  console.log(req.body);
  const { classKey, assignmentKey, title, unitN, unit, files } = req.body;

  const newPractice = new Practice({
    classKey,
    assignmentKey,
    title,
    unitN,
    unit,
    files,
  });

  try {
    await newPractice.save();
    const data = { message: "New Practice Added Successfully" };
    res.status(200).send(data);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getGivenPractice = async (req, res) => {
  console.log(req.body);
  const { assignmentKey } = req.body;
  try {
    const result = await Practice.find({ assignmentKey: assignmentKey });
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getAllPractice, makeNewPractice, getGivenPractice };
