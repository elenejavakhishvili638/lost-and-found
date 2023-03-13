const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/error");
const { validationResult } = require("express-validator");

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

const getItemById = (req, res, next) => {
  const itemId = req.params.itemId;
  const item = itemList.find((item) => {
    return item.id === itemId;
  });

  if (!item) {
    const error = new HttpError("Could not find an item.", 404);
    return next(error);
    // return res.status(404).json({ message: "Could not find an item." });
  }

  console.log(item);
  res.json({ item });
};

const getItemByUserId = (req, res, next) => {
  const userId = req.params.userId;
  const items = itemList.filter((item) => {
    return item.user === userId;
  });

  if (!items || items.length === 0) {
    const error = new HttpError("Could not find an user.", 404);

    return next(error);
    // return res.status(404).json({ message: "Could not find an user." });
  }

  res.json({ items });
};

const createItem = (req, res, next) => {
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
    address,
    user,
  } = req.body;

  const newItem = {
    id: uuidv4(),
    title,
    lost_date,
    location,
    description,
    other,
    image,
    address,
    user,
  };
  itemList = [newItem, ...itemList];
  //   console.log(newItemList);
  //   items.push(newItem);
  res.status(201).json({ item: newItem });
};

const deleteItem = (req, res, next) => {
  const itemId = req.params.itemId;

  if (!itemList.find((item) => item.id === itemId)) {
    throw new HttpError("Could not find item for that id.", 404);
  }

  itemList = itemList.filter((item) => item.id !== itemId);

  //   if (!item) {
  //     const error = new HttpError("Could not find an item.", 404);
  //     return next(error);
  //     // return res.status(404).json({ message: "Could not find an item." });
  //   }

  //   console.log(item);
  res.status(200).json({ message: "Deleted item." });
};

exports.getItemById = getItemById;
exports.getItemByUserId = getItemByUserId;
exports.createItem = createItem;
exports.deleteItem = deleteItem;
exports.getItems = getItems;
