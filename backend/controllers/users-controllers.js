const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/error");

const User = require("../models/user");

// const { validationResult } = require("express-validator");

let users = [
  {
    id: "u1",
    user_name: "elene",
    password: "123",
    items: 1,
  },
];

const loginUser = async (req, res, next) => {
  const { user_name, password } = req.body;

  // const foundUser = users.find((user) => user.user_name === user_name);

  let foundUser;

  try {
    foundUser = await User.findOne({ user_name: user_name });
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!foundUser || foundUser.password !== password) {
    const error = new HttpError("Could not find an user.", 401);

    return next(error);
  }

  res.json({ message: "Logged in" });
};

const signupUser = async (req, res, next) => {
  // const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   const error = new HttpError(
  //     "Invalid inputs passed, please check your data",
  //     422
  //   );

  //   return next(error);
  // }

  const { user_name, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ user_name: user_name });
    // console.log(existingUser);
  } catch (err) {
    // console.log(err);
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError("User already exists", 422);
    return next(error);
  }

  const newUser = new User({
    user_name,
    password,
  });

  try {
    await newUser.save();
  } catch (err) {
    console.log(err);
    const error = new HttpError("Could not sign up an user.", 500);
    return next(error);
  }

  res.status(201).json({ user: newUser.toObject({ getters: true }) });
};

exports.loginUser = loginUser;
exports.signupUser = signupUser;
