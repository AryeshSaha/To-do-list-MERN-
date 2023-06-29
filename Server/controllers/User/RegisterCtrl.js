const expressAsyncHandler = require("express-async-handler");
const getToken = require("../../config/token/getToken");
const Users = require("../../models/UsersModel");

const RegisterCtrl = expressAsyncHandler(async (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname && !email && !password) {
    throw new Error("Please enter your credentials");
  }

  const checkMail = await Users.findOne({ email });

  if (checkMail)
    throw new Error("Email already exists, try with a different one");

  try {
    const user = await Users.create({
      fullname,
      email,
      password,
    });
    let token = getToken(user._id);
    res.json({ token, message: "Registration successful" });
  } catch (error) {
    res.json({ error, message: "Registration unsuccessful" });
  }
});

module.exports = RegisterCtrl;
