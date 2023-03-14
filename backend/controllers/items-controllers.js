const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/error");
const { validationResult } = require("express-validator");

const Item = require("../models/item");

let itemList = [
  {
    id: "i1",
    title: "pen",
    lost_date: "20.19.2022",
    other: "dfnhirfbwiejfnweijbfiejbfejbf",
    description: "huhkbkjkjbkjbkj",
    location: "tbilisi",
    image: "dheiufhdkashkasjh",
    address: {
      longitude: 44.7171335,
      latitude: 41.9389861,
    },
    user: "u1",
  },
];

const getItems = (req, res, next) => {
  if (itemList.length === 0) {
    const error = new HttpError("Could not find an item.", 404);
    return next(error);
  }

  res.status(201).json(itemList);
};

const getItemById = async (req, res, next) => {
  const itemId = req.params.itemId;
  // const foundItem = itemList.find((item) => {
  //   return item.id === itemId;
  // });

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
    // return res.status(404).json({ message: "Could not find an item." });
  }

  console.log(foundItem);
  res.json({ foundItem: foundItem.toObject({ getters: true }) });
};

const getItemByUserId = async (req, res, next) => {
  const userId = req.params.userId;
  // const items = itemList.filter((item) => {
  //   return item.user === userId;
  // });

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
    // return res.status(404).json({ message: "Could not find an user." });
  }

  // console.log();
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

  // const newItem = {
  //   id: uuidv4(),
  //   title,
  //   lost_date,
  //   location,
  //   description,
  //   other,
  //   image,
  //   address,
  //   user,
  // };

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

  // itemList = [newItem, ...itemList];
  //   console.log(newItemList);
  //   items.push(newItem);
  try {
    await newItem.save();
  } catch (error) {
    const err = new HttpError("Creating item failed, please try again", 500);
    return next(err);
  }
  res.status(201).json({ item: newItem });
};

const deleteItem = async (req, res, next) => {
  // let item;
  // try {
  //   item = await Item.findById(itemId);
  // } catch (err) {
  //   const error = new HttpError(
  //     "Something went wrong, could not delete place.",
  //     500
  //   );

  //   return next(error);
  // }

  // try {
  //   console.log(item);
  //   await item.remove();
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

  const itemId = req.params.itemId;

  try {
    const deletedItem = await Item.findByIdAndDelete(itemId);
    if (!deletedItem) {
      const error = new HttpError("Item not found.", 404);
      return next(error);
    }
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
};

exports.getItemById = getItemById;
exports.getItemByUserId = getItemByUserId;
exports.createItem = createItem;
exports.deleteItem = deleteItem;
exports.getItems = getItems;
