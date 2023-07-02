const FetchMyPosts = require("../controllers/User/FetchMyPosts");
const LoginCtrl = require("../controllers/User/Login");
const RegisterCtrl = require("../controllers/User/RegisterCtrl");
const AuthHandler = require("../middlewares/Auth");
// const FetchUsersCtrl = require("../controllers/User/FetchUsers");

const UserRoutes = require("express").Router();

UserRoutes.route("/").post(RegisterCtrl);

UserRoutes.route("/login").post(LoginCtrl);

// for development purposes
// UserRoutes.route("/fetch").get(AuthHandler, FetchUsersCtrl);

UserRoutes.route("/myPosts").get(AuthHandler, FetchMyPosts)

module.exports = UserRoutes;
