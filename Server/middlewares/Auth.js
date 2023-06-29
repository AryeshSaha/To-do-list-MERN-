const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Users = require("../models/UsersModel");

const AuthHandler = expressAsyncHandler(async (req, res, next) => {
  let token;
  if (!req.headers.authorization?.startsWith("Bearer"))
    throw new Error("Please provide the bearer token");

  try {
    token = req.headers.authorization.replace("Bearer ", "");
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_KEY);

      const user = await Users.findById(decoded?.id).select("-password");

      req.user = user;
      next();
    } else {
      throw new Error("You don't have permission to have access");
    }
  } catch (error) {
    throw new Error("Token expired! Login again");
  }
});

module.exports = AuthHandler;
