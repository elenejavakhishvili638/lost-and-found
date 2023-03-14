const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_name: { type: String, required: true, minlength: 3, unique: true },
  password: { type: String, required: true, minlength: 5 },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
