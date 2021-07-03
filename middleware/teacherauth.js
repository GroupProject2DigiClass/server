const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const Teacher = require("../schema/teacherAddschema/InstituteTeacherSchema");



const teacherauth = async (req, res, next) => {
  try {
    console.log("--------------------------");
    console.log(req.body.token);
    const key = req.body.token;
    console.log("--------------------------");
    const ticket = await client.verifyIdToken({
      idToken: key,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    console.log(payload);
    const { sub, email, name, picture } = payload;
    const userId = sub;
    req.userId = payload?.email;

    const getAllClassroom = async (req, res) => {
        // console.log(req.userId);
         
       
         try {
           const findResult = await Class.find({studentAllowed:req.userId});
           res.status(200).send(findResult);
         } catch (error) {
           res.status(409).json({ message: error.message });
         }
       };



    const findResult = await Teacher.find({email:email});
    console.log(findResult);
    console.log("teacjer found or not");
   
    
    if(findResult[0].email==email){
        next();
    }
    else{
        res.send("you dont have proper rights Contact Admin if you think this is a mistake");
    }
  } catch (error) {
    console.log(error);
    res.send("you dont have proper rights Contact Admin if you think this is a mistake");
  }
};

module.exports = { teacherauth };
