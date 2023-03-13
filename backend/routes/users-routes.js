const express = require("express");
const { check } = require("express-validator");

const { loginUser, signupUser } = require("../controllers/users-controllers");

const router = express.Router();

router.post(
  "/signup",
  [
    check("user_name").isLength({ min: 3 }),
    check("password").isLength({ min: 5 }),
  ],
  signupUser
);
router.post("/login", loginUser);

module.exports = router;
