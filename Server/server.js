const express = require("express");
const cors = require("cors");
const DbCon = require("./config/db/DbCon");
const UserRoutes = require("./routes/UserRoutes");
const PostRoutes = require("./routes/PostRoutes");
const { notFound, errorHandler } = require("./middlewares/ErrHandler");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 4000;

// Database connection
DbCon();

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // allow cross origin requests from client side (browser) to server side

// routes
app.use("/api/user/", UserRoutes);
app.use("/api/post/", PostRoutes);

// handling errors
app.use(notFound);
app.use(errorHandler);

// listen on port
const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
