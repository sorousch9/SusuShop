import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";
import { SingelProduct } from "./SingelProduct";
import "./products.scss";
import { Container } from "react-bootstrap";
export const Products = ({ cat, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(
          cat ? `products?category=${cat}` : "products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => (
            <SingelProduct item={item} key={item._id} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <SingelProduct item={item} key={item._id} />)}
    </Container>
  );
};
