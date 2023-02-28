const HttpError = require("../models/error");

const items = [
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

const getItemById = (req, res, next) => {
  const itemId = req.params.itemId;
  const item = items.find((item) => {
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
  const user = items.find((item) => {
    return item.user === userId;
  });

  if (!user) {
    const error = new HttpError("Could not find an user.", 404);

    return next(error);
    // return res.status(404).json({ message: "Could not find an user." });
  }

  res.json({ user });
};

exports.getItemById = getItemById;
exports.getItemByUserId = getItemByUserId;
