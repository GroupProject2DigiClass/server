const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const auth = async (req, res, next) => {
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

    
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { auth };
