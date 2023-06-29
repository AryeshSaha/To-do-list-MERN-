const mongoose = require("mongoose");

const isValid = (id) => {
  const isIdValid = mongoose.Types.ObjectId.isValid(id);
  if (!isIdValid) throw new Error("Id is not valid");
};

module.exports = isValid;
