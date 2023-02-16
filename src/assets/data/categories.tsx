import { v4 as uuidv4 } from "uuid";
import { Categories } from "../../types/categoriesTypes";

export const categories: Categories[] = [
  {
    id: uuidv4(),
    title: "ALL PRODUCTS",

  },
  {
    id: uuidv4(),
    title: "CLOTHES",

  },
  {
    id: uuidv4(),
    title: "TECHNICS",

  },
  {
    id: uuidv4(),
    title: "OTHERS",

  },
];
