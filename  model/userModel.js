const mongoose = require("mongoose");
const userSchema = require("../schema/userSchema");

const User = mongoose.model("collections", userSchema);

module.exports = User;