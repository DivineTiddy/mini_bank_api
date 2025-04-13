const jsonwebtoken = require("jsonwebtoken");

const auth = async (req, res, next) => {
  // console.log(req.headers)
  try {
    const accessToken = req.headers.authorization.replace("Bearer ", "");

    const jwtverify = jsonwebtoken.verify(accessToken, process.env.JWTSALT);
    req.user = jwtverify;
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized",
      status: false,
    });
    return;
  }

  next();
};
module.exports = auth;
