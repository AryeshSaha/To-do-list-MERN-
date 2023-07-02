const expressAsyncHandler = require("express-async-handler");
const isValid = require("../../utils/isValid.js");
const Post = require("../../models/PostsModel");

const UpdatePosts = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  isValid(userId);

  const { id } = req.body;
  isValid(id);

  const post = await Post.findById(id);

  if (!post) throw new Error("Post does not exist!");
  
  try {
    const post = await Post.findByIdAndUpdate(
      id,
      {
        ...req.body,
        author: userId,
      },
      { new: true }
    )
      .populate("author")
    res.json(post);
  } catch (error) {
    res.json(error);
  }
});

module.exports = UpdatePosts;
