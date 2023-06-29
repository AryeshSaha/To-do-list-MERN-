const mongoose = require("mongoose");

const PostModel = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Don't enter empty task."],
    },
    description: {
      type: String,
      default: "",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostModel);
module.exports = Post;
