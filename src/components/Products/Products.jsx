import { useEffect, useState } from "react";
import { SingelProduct } from "./SingelProduct";
import "./products.scss";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

export const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState ([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/products"
        );
        setProducts(res.data);
      } catch (err) { }
    };
    getProduct();
  }, []);

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

  return (
    <div className="products-list">
      <Container>
        <Row>
          {products.map((item) => (
            <Col
              key={item.id}
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
