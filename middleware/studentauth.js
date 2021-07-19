const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const Class = require("../schema/classSchema/classSchema");
const Teacher = require("../schema/teacherAddschema/InstituteTeacherSchema");



const studentauth = async (req, res, next) => {
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


        console.log(req.userId);
        console.log(req.body.classKey);


        //const findResult = getAllClassroom(res,res);
        const findResult = await Class.find({ studentAllowed: req.userId, classKey: req.body.classKey });
        console.log(findResult);
        console.log("student found in that class or not");
        var match ="tea";
        match= findResult[0].studentAllowed.find(function (element) {
            
            return element == req.userId;
        })
        console.log(match);

        if (match==req.userId) {
            next();
            
        }
        else {
            res.send("you dont have proper rights Contact Admin if you think this is a mistake");
        }

    } catch (error) {
        console.log(error);
        res.send("you dont have rights to create class Contact Admin if you think this is a mistake");
    }
};

module.exports = { studentauth };
