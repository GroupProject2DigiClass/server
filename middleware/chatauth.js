const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const Teacher = require("../schema/teacherAddschema/InstituteTeacherSchema");
const Class = require("../schema/classSchema/classSchema");


const chatauth = async (req, res, next) => {
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

    


    
    var findResult = await Teacher.find({email:email});
    console.log(findResult);
    console.log("teacjer found or not");
    var teachertrue=0;
    if(findResult.length===0){
        teachertrue=1;
    }
    

    //const findResult = getAllClassroom(res,res);
    const findResult1 = await Class.find({ studentAllowed: req.userId, classKey: req.body.classKey });
    console.log(findResult1);
    console.log("student found in that class or not");
    var match = findResult1[0].studentAllowed.find(function (element) {
        
        return element == req.userId;
    })
    console.log(match);


    
    if(teachertrue!=1 && findResult[0].email==email){
       req.sender="TEACHER"
        next();
    }
    

    else if (match==req.userId) {
        req.sender=name;
        next();
        
    }
    else {
        res.send("you dont have proper rights Contact Admin if you think this is a mistake");
    }
  } catch (error) {
    console.log(error);
    res.send("you dont have proper rights Contact Admin if you think this is a mistake");
  }
};

module.exports = { chatauth };
