import { Link } from "react-router-dom";
import "./specialOffer.scss";
import ptest from "../../../assets/products-img/ptest.png";
import { Col, Row } from "react-bootstrap";
import { BsArrowsFullscreen,BsHeart } from "react-icons/bs";
export const SpecialOffer = () => {
  return (
    <div className="spacial-offer">
      <Row>
        <div className="header-so">
          <Col xl="6">
            <div className="column">
              <h4>
                Special Offers <p>of the week!</p>
              </h4>
              <span>
                Ut placerat, magna quis porttitor vulputate, magna nunc auctor
                ante.
              </span>
            </div>
          </Col>
          <Col xl="6">
            <div className="column1">React CountDown</div>
          </Col>
        </div>
      </Row>

      <div className="body-so">
        <div className="product-so">
          <div className="product-wrapper">
            <div className="thumbnail-wrapper">
              <div className="product-badges">
                <span className="badge1">20%</span>
                <span className="badge2">Sofort lieferbar</span>
              </div>
              <Link to="/"  style={{ color: "inherit", textDecoration: "inherit" }} >
                <img className="p-img" src={ptest} alt="sas" />
              </Link>
              <div className="product-buttons">
                <Link to="/">
                    <BsArrowsFullscreen  style={{ color: "gray", textDecoration: "inherit" }}/>
                </Link>
                <Link to="/">
                    <BsHeart  style={{ color: "gray", textDecoration: "inherit" }}/>
                </Link>
              </div>
            </div>
            <div className="content-wrapper"></div>
          </div>
          <div className="product-content-fade"></div>
        </div>
      </div>
    </div>
  );
};
