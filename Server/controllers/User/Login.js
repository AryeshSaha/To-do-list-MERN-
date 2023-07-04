const expressAsyncHandler = require("express-async-handler");
const getToken = require("../../config/token/getToken");
const Users = require("../../models/UsersModel");

const LoginCtrl = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    throw new Error("Please enter your credentials");
  }

  const user = await Users.findOne({ email });

  if (!user) throw new Error("Email does not exist");

  if (await user.CheckPass(password)) {
    res.json({
      name: user.fullname,
      token: getToken(user._id),
      message: "Login Successful",
    });
  } else {
    res.status(500);
    throw new Error("Invalid Password");
  }
});

module.exports = LoginCtrl;
