const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const userCheck = require("../utils/userUtils");

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const userExist = await userCheck(username, email);

    if (userExist) {
      const status = userExist["status"];
      return res.status(status).json(userExist);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    return res.json({ status: 200, user });
  } catch (ex) {
    next(ex);
  }
};
