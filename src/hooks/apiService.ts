import axios from "axios";
import { ProductType } from "../../interfaces/Products";

export const fetchData = async (url: string) => {
  try {
    const response = await axios.get<ProductType[]>(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const fetchSingleData = async (url: string) => {
  try {
    const response = await axios.get<ProductType>(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};