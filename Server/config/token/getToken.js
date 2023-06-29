const jwt = require("jsonwebtoken");

const getToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: "7d", // 3days in seconds
  });
  return token;
};

module.exports = getToken;
