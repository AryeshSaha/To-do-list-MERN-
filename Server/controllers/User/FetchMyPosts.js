const expressAsyncHandler = require("express-async-handler");
const isValid = require("../../utils/isValid.js");
const Users = require("../../models/UsersModel");

const FetchMyPosts = expressAsyncHandler(async (req, res) => {
  const id = req.user._id;
  isValid(id);

  try {
    const profile = await Users.findById(id).select("-password").populate("Posts");
    res.json(profile);
  } catch (error) {
    res.status(404);
    throw new Error("Profile does not exist");
  }
});

module.exports = FetchMyPosts;