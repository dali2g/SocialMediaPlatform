const user = require("../model/user");

const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await user.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No users found!" });
  }

  return res.status(200).json({ users });
};

module.exports = { getAllUsers };
