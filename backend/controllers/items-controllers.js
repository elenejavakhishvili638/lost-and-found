const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/error");
const { validationResult } = require("express-validator");

const mongoose = require("mongoose");
const User = require("../models/user");

const Item = require("../models/item");

// let itemList = [
//   {
//     id: "i1",
//     title: "pen",
//     lost_date: "20.19.2022",
//     other: "dfnhirfbwiejfnweijbfiejbfejbf",
//     description: "huhkbkjkjbkjbkj",
//     location: "tbilisi",
//     image: "dheiufhdkashkasjh",
//     address: {
//       longitude: 44.7171335,
//       latitude: 41.9389861,
//     },
//     user: "u1",
//   },
// ];

const getItems = async (req, res, next) => {
  let items;

  try {
    items = await Item.find();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find any items.",
      500
    );
    return next(error);
  }

  res.status(201).json(items);
};

const getItemById = async (req, res, next) => {
  const itemId = req.params.itemId;

  let foundItem;
  try {
    foundItem = await Item.findById(itemId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find an item.",
      500
    );
    return next(error);
  }

  if (!foundItem) {
    const error = new HttpError("Could not find an item.", 404);
    return next(error);
  }

  console.log(foundItem);
  res.json({ foundItem: foundItem.toObject({ getters: true }) });
};

const getItemByUserId = async (req, res, next) => {
  const userId = req.params.userId;

  console.log(userId);

  let items;
  try {
    items = Item.find({ user: userId });
  } catch (err) {
    const error = new HttpError(
      "Could not find an item, something went wrong",
      500
    );

    return next(error);
  }

  if (!items || items.length === 0) {
    const error = new HttpError("Could not find an user.", 404);

    return next(error);
  }
  res.json({
    items: (await items).map((item) => item.toObject({ getters: true })),
  });
};

const createItem = async (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data", 422);
  }
  const {
    title,
    lost_date,
    description,
    other,
    location,
    image,
    // address,
    user,
  } = req.body;

  const newItem = new Item({
    title,
    lost_date,
    location,
    description,
    other,
    image,
    // address,
    user,
  });

  let creator;

  try {
    creator = await User.findById(user);
  } catch (err) {
    const error = new HttpError("Creating item failed, please try again.", 500);
    return next(error);
  }

  if (!creator) {
    const error = new HttpError("Could not find user for provided id", 404);
    return next(error);
  }

  console.log(creator);

  try {
    // await newItem.save();
    const session = await mongoose.startSession();
    session.startTransaction();
    await newItem.save({ session: session });
    creator.items.push(newItem);
    await creator.save({ session: session });
    await session.commitTransaction();
  } catch (error) {
    console.log(error);
    const err = new HttpError("Creating item failed, please try again", 500);
    return next(err);
  }
  res.status(201).json({ item: newItem });
};

const deleteItem = async (req, res, next) => {
  const itemId = req.params.itemId;

  // console.log("id", req.params);

  let item;
  try {
    item = await Item.findById(itemId).populate("user");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete place.",
      500
    );

    return next(error);
  }

  if (!item) {
    const error = new HttpError("Could not find an item for this id.", 404);
    return next(error);
  }

  console.log(item);
  try {
    // console.log(item);
    const session = await mongoose.startSession();
    session.startTransaction();
    await item.deleteOne({ session: session });
    item.user.items.pull(item);
    await item.user.save({ session: session });
    await session.commitTransaction();
    console.log("Item deleted successfully");
  } catch (err) {
    console.log("Error deleting item:", err);
    const error = new HttpError(
      "Something went wrong could not delete place.",
      500
    );
    return next(error);
  }
  res.status(200).json({ message: "Deleted item." });

  // try {
  //   const deletedItem = await Item.findByIdAndDelete(itemId);
  //   if (!deletedItem) {
  //     const error = new HttpError("Item not found.", 404);
  //     return next(error);
  //   }
  //   console.log("Item deleted successfully");
  // } catch (err) {
  //   console.log("Error deleting item:", err);
  //   const error = new HttpError(
  //     "Something went wrong could not delete place.",
  //     500
  //   );
  //   return next(error);
  // }

  // res.status(200).json({ message: "Deleted item." });
};

exports.getItemById = getItemById;
exports.getItemByUserId = getItemByUserId;
exports.createItem = createItem;
exports.deleteItem = deleteItem;
exports.getItems = getItems;
