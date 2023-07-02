const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UsersModel = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please enter your full name."],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please enter your email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a new password"],
    },
    postCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// populate the posts
UsersModel.virtual("Posts", {
  ref: "Post",
  foreignField: "author",
  localField: "_id",
});

// encrypt password before saving
UsersModel.pre("save", async function (next) {
  // Only run this line if password gets modded but not on other update functions
  if (!this.isModified("password")) return next();

  // hash password with strength of 10
  const saltRounds = 10;
  // vs code might suggest await is unneccessary so remove it but then the hashing won't work(tried and tested)
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

// check if password matches
UsersModel.methods.CheckPass = async function (pass) {
  return await bcrypt.compare(pass, this.password);
};

const Users = mongoose.model("Users", UsersModel);
module.exports = Users;
