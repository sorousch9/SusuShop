import { Anons } from "../../components/Anons/Anons";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import "./productList.scss";
import { Products } from "../../components/Products/Products";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../hooks/apiService";
import { ProductType } from "../../../interfaces/Products";
import { Col, Container, Row } from "react-bootstrap";

export const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetchData("http://localhost:5000/products/");
      if (response !== undefined) {
        setProducts(response);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <Container>
      <Anons />
      <Header />
      <Row>
        <Row className="breadcrumb">
          <nav className="">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <span />
                <Link to={"/products"}>Shop</Link>
              </li>
            </ul>
          </nav>
        </Row>
        <Col xs={12} md={9} lg={9} >
          <Products products={products} />
        </Col>
        <Col xs={12} md={3} lg={3} style={{backgroundColor:"red"}}>
          a
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};
