const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const Teacher = require("../schema/teacherAddschema/InstituteTeacherSchema");
const Class = require("../schema/classSchema/classSchema");


const sectureauth = async (req, res, next) => {
  try {
    console.log("--------------------------");
    console.log(req);
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
    
    var rollnoS= email.split("@");
    var actualroll=rollnoS[0];

   
    
    if(teachertrue!=1 && findResult[0].email==email){
       req.body.rollNo="TEACHER"
        next();
    }
    

    else   {
        req.body.rollNo=actualroll;
        next();
        
    }
    
    
  } catch (error) {
    console.log(error);
    res.send("you dont have proper rights Contact Admin if you think this is a mistake");
  }
};

module.exports = { sectureauth };
