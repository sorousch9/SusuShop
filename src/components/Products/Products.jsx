import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";
import { SingelProduct } from "./SingelProduct";
import "./products.scss";
import { Col, Container, Row } from "react-bootstrap";
export const Products = ({ cat, filters, sort }) => {
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
 
  useEffect(() => {
    if (sort === "neuheiten") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.updatedAt - b.updatedAt)
      );
    } else if (sort === "prise-n") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  console.log(products);
  return (
    <div className="products-list">
      <Container>
        <Row>
          {cat
            ? filteredProducts.map((item) => (
                <Col
                  key={item._id}
                  className="products-list-item"
                  xs={12}
                  md={6}
                  lg={3}
                >
                  <SingelProduct item={item} />
                </Col>
              ))
            : products.map((item) => (
                <Col
                  key={item._id}
                  className="products-list-item"
                  xs={12}
                  md={6}
                  lg={3}
                >
                  <SingelProduct item={item} />
                </Col>
              ))}
        </Row>
      </Container>
    </div>
  );
};
