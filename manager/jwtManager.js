const jsonwebtoken = require("jsonwebtoken");

const jwtManager = (user) => {
  const accessToken = jsonwebtoken.sign(
    { _id: user._id, name: user.name },
    process.env.JWTSALT
  );
  return accessToken;
};

module.exports = jwtManager
