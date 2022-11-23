import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";
import { SingelProduct } from "./SingelProduct";
import "./products.scss";
import { Col, Container, Row } from "react-bootstrap";
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
  console.log(filteredProducts)
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
                    lg={4}
                  >
                    <SingelProduct item={item} />
                  </Col>
                ))
              : products
                  .slice(0, 8)
                  .map((item) => <Col  key={item._id}  className="products-list-item"
                  xs={12}
                  md={6}
                  lg={3}><SingelProduct item={item} /></Col>)}
       
        </Row>
      </Container>
    </div>
  );
};
