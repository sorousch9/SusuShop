import { CategoryItem } from "./CategoryItem";
import { useEffect, useState } from "react";

import { InterfaceCategories } from "../../interfaces/Products";
import { fetchcat } from "../hooks/apiService";
export const Categories = () => {
  const [category, setCategory] = useState<InterfaceCategories[]>([]);
  
  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetchcat("http://localhost:5000/category");
      if (response !== undefined) {
        setCategory(response);
      }
    };
    fetchDataAsync();
  }, []);
  return (
    <div>
      {category.map((item) => (
        <CategoryItem key={item.id} item={item} />
        ))}
    </div>
  );
};

