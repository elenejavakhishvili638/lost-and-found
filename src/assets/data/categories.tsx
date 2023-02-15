import { v4 as uuidv4 } from "uuid";
import { Categories } from "../../types/categoriesTypes";

export const categories: Categories[] = [
  {
    id: uuidv4(),
    title: "HOME",
    to: "/"
  },
  {
    id: uuidv4(),
    title: "ALL PRODUCTS",
    to: "all-products"
  },
  {
    id: uuidv4(),
    title: "CLOTHES",
    to: "clothes"
  },
  {
    id: uuidv4(),
    title: "TECHNICS",
    to: "technics"
  },
  {
    id: uuidv4(),
    title: "OTHERS",
    to: "others"
  },
];
