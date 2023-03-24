import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchData } from "../hooks/apiService";
import { ProductType } from "../../interfaces/Products";
import { Categories } from "./Categories";
import { MainBanner } from "./Main/MainBanner";
import { SpecialOffer } from "./Main/SpecialOffer";
import { TopRecommendations } from "./Main/TopRecommendations";
import { Widget } from "./Main/Widget";
import { CustomerOpinions } from "./Main/CustomerOpinions";
import { ScrollToTop } from "./ScrollTop";

export const Main = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetchData("http://localhost:5000/products");
      if (response !== undefined) {
        setProducts(response.data);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <Container>
      <Row>
        <Col xl="2">
          <div className="sideBar">
            <Link
              to="/products"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <button className="glow" type="button">
                Product List
              </button>
            </Link>
            <div className="categorie-1">
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Aktionsartikel
              </Link>
            </div>
            <div className="categorie-1">
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                B-Ware
              </Link>
            </div>
            <div className="categorie-1">
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Themens Shops
              </Link>
            </div>
            <div className="categorie">
              <h5>Kategorien</h5>
              <ul>
                <li>
                  <Categories />
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col xl="10" md="12">
          <MainBanner />
          <SpecialOffer products={products} />
          <TopRecommendations products={products} />
          <Widget />
          <CustomerOpinions products={products} />
        </Col>
      </Row>
    </Container>
  );
};
