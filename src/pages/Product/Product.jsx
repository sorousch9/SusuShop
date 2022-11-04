import "./product.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Anons } from "../../components/Anons/Anons";
import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

export default function Product() {
  return (
    <Container>
      <Anons />
      <Header />
      <nav className="cart-breadcrumb">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <span />
            <Link>Product</Link>
          </li>
        </ul>
      </nav>
      <div className="single-product-wrapper">
        <div className="product-wrapper">
          <div className="product-header">
            <h2 className="product-title">title</h2>
            <div className="product-meta">
              <div className="product-brand">
                <table>
                  <tr>
                    <th>Marke:</th>
                    <td>
                      <p> cat1 , cat2</p>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="product-rating"></div>
            </div>
          </div>
          <div className="product-contact">
            <Row>
              <Col lg="5">
                <div className="photo-gallery">
                    <div className="product-badges">
                        <span className="badge style-1 onsale"></span>
                    </div>
                    <div className="slider-wrapper">
                        swiper api
                    </div>
                </div>
              </Col>
              <Col lg="7">
                <Col></Col>
                <Col></Col>
              </Col>
            </Row>
          </div>
        </div>
        <div className="tabs-wrapper"></div>
      </div>
      <Footer />
    </Container>
  );
}
