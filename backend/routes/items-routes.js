const express = require("express");
const {
  getItemById,
  getItemByUserId,
} = require("../controllers/items-controllers");

const router = express.Router();

router.get("/:itemId", getItemById);

router.get("/user/:userId", getItemByUserId);

module.exports = router;
