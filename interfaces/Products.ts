interface Img {
  id: number;
  src: string;
}

export interface ProductType {
  id: number;
  title: string;
  brand: string;
  price: number;
  descShort: string[];
  category: string[];
  amount: number;
  img: Img[];
  available: string[];
  sale: number;
  onSale: boolean;
  size: string[];
  color: string[];
  quantity: number;
}
export type Props = {
  products: ProductType[];
};