const express = require("express");
const { check } = require("express-validator");

const {
  getItemById,
  getItemByUserId,
  createItem,
  deleteItem,
  getItems,
} = require("../controllers/items-controllers");

const router = express.Router();

router.get("/list", getItems);

router.get("/:itemId", getItemById);

router.get("/user/:userId", getItemByUserId);

router.post(
  "/upload-product",
  [
    check("title").not().isEmpty(),
    check("lost_date").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("location").not().isEmpty(),
  ],
  createItem
);

router.delete("/:itemId", deleteItem);

module.exports = router;
