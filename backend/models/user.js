const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");
// const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_name: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
    index: true,
  },
  password: { type: String, required: true, minlength: 5 },
  items: [{ type: mongoose.Types.ObjectId, required: true, ref: "Item" }],
});

// userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
