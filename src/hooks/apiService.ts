import axios from "axios";
import { InterfaceCategories, ProductType } from "../../interfaces/Products";

export const fetchData = async (url: string) => {
  try {
    const response = await axios.get<ProductType[]>(url);
    return response;
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
export const fetchcat = async (url: string) => {
  try {
    const response = await axios.get<InterfaceCategories[]>(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};