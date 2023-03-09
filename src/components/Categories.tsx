import React from "react";
import { categories } from "../data";
import { CategoryItem } from "./CategoryItem";

export const Categories = () => {
  return (
    <div>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};
