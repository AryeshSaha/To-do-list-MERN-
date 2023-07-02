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
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = DbCon;
