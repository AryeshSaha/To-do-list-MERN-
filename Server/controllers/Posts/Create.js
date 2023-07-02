const expressAsyncHandler = require("express-async-handler");
const Post = require("../../models/PostsModel");
const isValid = require("../../utils/isValid.js");
const Users = require("../../models/UsersModel");

const CreatePosts = expressAsyncHandler(async (req, res) => {
  // req.user is from AuthHandler where i set the unique token for verification
  const id = req.user._id;
  const { title, description } = req.body;

  // this function checks whether the format of the id is valid or not
  isValid(id);

  // checks if content is sent from the client side
  if (!title && !description) throw new Error("No content found");

  try {
    // creating a single post using the Post model
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
