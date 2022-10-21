import { Link } from "react-router-dom";
import "./specialOffer.scss";
import ptest from "../../../assets/products-img/ptest.png";
import { Col, Row } from "react-bootstrap";
import { BsArrowsFullscreen, BsHeart } from "react-icons/bs";
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

      <div className="module-body products align-center">
        <div className="product product-type-simple">
          <div className="product-wrapper product-type-3">
            <div className="thumbnail-wrapper">
              <div className="product-badges">
                <span className="badge style-1 onsale">20%</span>
                <span className="badge style-2 organic">Sofort lieferbar</span>
              </div>
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <img className="p-img" src={ptest} alt="sas" />
              </Link>
              <div className="product-buttons">
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <BsArrowsFullscreen
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  />
                </Link>
                <div className="product-buttons">
                  <Link
                    to="/"
                    className="detail-bnt quick-view-button"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <BsHeart />
                  </Link>
                  <div className="tinv-wraper tinv-wishlist tinvwl-shortcode-add-to-cart">
                    <div className="tinv-wishlist-clear"></div>
                    <Link
                      to="-"
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      <span className="tinvwl_add_to_wishlist-text">
                        Add to Wishlist
                      </span>
                    </Link>
                    <div className="tinv-wishlist-clear"></div>{" "}
                    <div className="tinvwl-tooltip">Add to Wishlist</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-wrapper">
              <span className="price">
                <del aria-hidden="true">
                  <span className="amount">
                    <bdi>
                      <span className="">
                        
                      </span>
                      24.00€
                    </bdi>
                  </span>
                </del>{" "}
                <ins>
                  <span className="amount">
                    <bdi>
                      <span >
                      €
                      </span>
                      19.50
                    </bdi>
                  </span>
                </ins>
              </span>
              <h3 className="product-title">
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  title="testing product"
                >
                  Multifunktionsgerät Brother MFC L3750CDW
                </Link>
              </h3>
              <div className="product-meta">
                <div className="product-available in-stock">AUF LAGER</div>
              </div>
              <div className="product-rating">
                <div
                  className="star-rating"
                  role="img"
                  aria-label="Rated 5.00 out of 5"
                >
                  <span style={{ width: "100%" }}>
                   
                  </span>
                </div>
                <div className="count-rating">
                  58 <span className="rating-text">Ratings</span>
                </div>
              </div>
              <div className="product-count">
                <div className="product-progress">
                  <span className="progress" style={{ width: "95%" }}></span>
                </div>
                <div className="product-pcs">
                die verfügbaren produkten : <span>26</span>
                </div>
              </div>
              <div className="product-fade-block">
                <div className="product-button-group cart-with-quantity ">
                  <div className="quantity ajax-quantity">
                    <div className="quantity-button minus">
                      <i className="klbth-icon-minus"></i>
                    </div>
                    <input
                      type="text"
                      className="input-text qty text"
                      name="quantity"
                      step="1"
                      min=""
                      max="26"
                      defaultValue="1"
                      title="Menge"
                      size="4"
                      inputMode="numeric"
                    />
                    <div className="quantity-button plus">
                      <i className="klbth-icon-plus"></i>
                    </div>
                  </div>
                  <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    In den Warenkorb
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="product-content-fade border-info"
            style={{ marginBottom: "-49px" }}
          ></div>
          <div className="product-content-fade"></div>
        </div>
      </div>
    </div>
  );
};
