const expressAsyncHandler = require("express-async-handler");
const Post = require("../../models/PostsModel");
const isValid = require("../../utils/isValid,js");
const Users = require("../../models/UsersModel");

const CreatePosts = expressAsyncHandler(async (req, res) => {
  const id = req.user._id;
  const { title, description } = req.body;

  isValid(id);

  if (!title && !description) throw new Error("No content found");

  try {
    const post = await Post.create({
      title,
      description,
      author: id,
    });

    // update user document by updating the user's post count
    await Users.findByIdAndUpdate(
      id,
      {
        $inc: {
          postCount: 1,
        },
      },
      {
        new: true,
      }
    );

    res.json(post);
  } catch (error) {
    res.json(error);
  }
});

module.exports = CreatePosts;
