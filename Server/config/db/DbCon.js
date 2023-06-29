const mongoose = require("mongoose");
require("dotenv").config();

const DbCon = async () => {
  try {
    await mongoose.set("strictQuery", false);
    const con = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log("====================================");
    console.log(`Error: ${error.message}`);
    console.log("====================================");
    process.exit();
  }
};

module.exports = DbCon;
