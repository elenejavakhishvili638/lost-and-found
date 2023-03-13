const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/error");

const { validationResult } = require("express-validator");

let users = [
  {
    id: "u1",
    user_name: "elene",
    password: "123",
    items: 1,
  },
];

const loginUser = (req, res, next) => {
  const { user_name, password } = req.body;

  const foundUser = users.find((user) => user.user_name === user_name);

  //   console.log(foundUser);
  if (!foundUser || foundUser.password !== password) {
    const error = new HttpError("Could not find an user.", 401);

    return next(error);
  }

  res.json({ message: "Logged in" });
};

const signupUser = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data", 422);
  }

  const { user_name, password } = req.body;

  const existingUser = users.find((user) => user.user_name === user_name);

  if (existingUser) {
    const error = new HttpError("User already exists", 422);
    return next(error);
  }

  const newUser = {
    user_name,
    id: uuidv4(),

    password,
  };

  users.push(newUser);

  console.log(users);

  res.status(201).json({ user: newUser });
};

exports.loginUser = loginUser;
exports.signupUser = signupUser;
