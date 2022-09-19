const User = require("../models/userModel");

const userCheck = async (username, email) => {
  let property = "";

  const usernameExists = await User.findOne({ username });
  if (usernameExists) {
    property = "Username";
    return { msg: `${property} already used`, status: 409 };
  }

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    property = "Email";
    return { msg: `${property} already used`, status: 409 };
  }
};

module.exports = userCheck;
