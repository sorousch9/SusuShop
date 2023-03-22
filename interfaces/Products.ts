interface Img {
  id: number;
  src: string;
}

export interface ProductType {
  id: number;
  title: string;
  brand: string;
  price: number;
  description: string;
  descShort: string[];
  category: string[];
  specifications: string[];
  inventory: number;
  img: Img[];
  available: string;
  sale: number;
  onSale: boolean;
  size: string[] | string;
  color: string[] | string;
  quantity: number;
}
export type Props = {
  products: ProductType[];
};
export interface InterfaceCategories {
  id: number;
  title: string;
  value: string;
  category: string;
}
