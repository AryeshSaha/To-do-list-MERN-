const expressAsyncHandler = require("express-async-handler");
const isValid = require("../../utils/isValid.js");
const Post = require("../../models/PostsModel");
const Users = require("../../models/UsersModel");

const DeletePosts = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  isValid(userId);

  const { id } = req.body;
  isValid(id);

  // check if post exists
  const postExists = await Post.findById(id);

  if (!postExists) throw new Error("Post don't exist");

  try {
    const removedPost = await Post.findByIdAndRemove(id);

    // Update users document
    await Users.findByIdAndUpdate(
      userId,
      {
        $inc: {
          postCount: -1,
        },
      },
      {
        new: true,
      }
    );
    res.json(removedPost);
  } catch (error) {
    res.json(error);
  }
});

module.exports = DeletePosts;
