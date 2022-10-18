import { Col, Row } from "react-bootstrap";
import "./mainBanner.scss";
import simg from "../../../assets/smallBanner.jpg";
import pimg from "../../../assets/p1.png";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
export const MainBanner = () => {
  return (
    <Row>
      <h4>AKTIONSARTIKEL</h4>
      <Col md="9">
        <div className="main-slider">
          <div className="img-wrapper">
            <img src={pimg} alt="product" />
          </div>
          <div className="info-wrapper">
            <div className="title-banner">
              <h6>Schubladenbox Böttcher AG</h6>
              <p>A4, Kunststoff, 5 Fächer, halboffen, bunt / anthrazit</p>
            </div>
            <div className="desc-banner">
              <span>11.89 €</span>
              <p>Lieferzeit: sofort lieferbar</p>
              <div className="banner-amont">
                <i>
                  <AiOutlineMinus />
                </i>
                <span>1</span>
                <i>
                  <AiOutlinePlus />
                </i>
                <button className="banner-btn">
                  In den Warenkorb
                  <FiShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col md="3">
        <div className="main-slider2">
          <img src={simg} alt="banner" />
          <h6>Neuheiten</h6>
        </div>
      </Col>
    </Row>
  );
};
