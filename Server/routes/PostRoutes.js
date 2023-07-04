const CreatePosts = require("../controllers/Posts/Create");
const DeletePosts = require("../controllers/Posts/Delete");
const UpdatePosts = require("../controllers/Posts/Update");
const AuthHandler = require("../middlewares/Auth");

const PostRoutes = require("express").Router();

PostRoutes.route("/create").post(AuthHandler, CreatePosts);
PostRoutes.route("/delete").delete(AuthHandler, DeletePosts);
PostRoutes.route("/update").put(AuthHandler, UpdatePosts);

module.exports = PostRoutes;
