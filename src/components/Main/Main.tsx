import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { categories } from "../../data";
import { SpecialOffer } from "./SpecialOffer";
import { Widget } from "./Widget/Widget";
import { fetchData } from "../../hooks/apiService";
import { ProductType } from "../../../interfaces/Products";
import { MainBanner } from "./MainBanner";
import { TopRecommendations } from "./TopRecommendations";
import { CustomerOpinions } from "./CustomerOpinions";

export const Main = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetchData("http://localhost:5000/products");
      if (response !== undefined) {
        setProducts(response);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <Container>
      <Row>
        <Col xl="2">
          <div className="sideBar">
            <button className="glow" type="button">
              GRATIS FÜR SIE
            </button>
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
                {categories.map((item) => (
                  <li key={item.id}>
                    <Link
                      to="/"
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      <span>{item.title}</span>
                      <i>
                        <MdKeyboardArrowRight />
                      </i>
                    </Link>
                  </li>
                ))}
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
      <a href="/" className="scrollToTop">
        {" "}
      </a>
    </Container>
  );
};
