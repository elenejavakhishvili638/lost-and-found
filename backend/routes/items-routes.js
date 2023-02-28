const express = require("express");
const {
  getItemById,
  getItemByUserId,
  createItem,
  deleteItem,
} = require("../controllers/items-controllers");

const router = express.Router();

router.get("/:itemId", getItemById);

router.get("/user/:userId", getItemByUserId);

router.post("/", createItem);

router.delete("/:itemId", deleteItem);

module.exports = router;
