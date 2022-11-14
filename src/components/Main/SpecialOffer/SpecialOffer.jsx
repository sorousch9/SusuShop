import { Link } from "react-router-dom";
import "./specialOffer.scss";
import { Col, Row } from "react-bootstrap";
import { BsArrowsFullscreen, BsHeart } from "react-icons/bs";
import { Timer } from "./Timer";
import { useEffect, useState } from "react";
import { publicRequest } from "../../../requestMethod";
import {
  addProduct,
  getCartCount,
  getSubTotal,
  getTotalAmount,
} from "../../../redux/cartRedux";
import { useDispatch } from "react-redux";



export const SpecialOffer = () => {
  
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(addProduct({ ...product }));
    dispatch(getCartCount());
    dispatch(getSubTotal());
    dispatch(getTotalAmount());
  };
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products");
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [product._id]);

  var productOnSale =
    product.filter &&
    product.filter((item) => {
      return item.onSale === "action";
    });
  return (
    <div className="spacial-offer">
      <Row>
        <div className="module-header">
          <Col xl="6">
            <div className="column">
              <h4>
                Sonderangebote <p>der Woche!</p>
              </h4>
              <span>
                Sonderverkauf einiger Produkte. Diese Rabatte werden nicht
                wiederholt. Vergeuden Sie diese Gelegenheit nicht
              </span>
            </div>
          </Col>
          <Col xl="6">
            <div className="column-countdown">
              <Timer />
            </div>
          </Col>
        </div>
      </Row>

      <div className="module-body products align-center">
        {productOnSale?.map((item) => (
          <div className="product product-type-simple" key={item._id}>
            <div className="product-wrapper product-type-3">
              <div className="thumbnail-wrapper">
                <div className="product-badges">
                  <span className="badge style-1 onsale">{item.sale}%</span>
                  <span className={item.available[1]}>{item.available[0]}</span>
                </div>
                <Link
                  to={`/product/${item._id}`}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <img
                    className="p-img"
                    src={item.img[0].src}
                    alt={item.title}
                  />
                </Link>
                <div className="product-buttons">
                  <Link
                    to={`/product/${item._id}`}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <BsArrowsFullscreen
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    />
                  </Link>

                  <Link
                    to="/"
                    className="detail-bnt quick-view-button"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <BsHeart />
                  </Link>
                </div>
              </div>
              <div className="content-wrapper">
                <span className="price">
                  <del aria-hidden="true">
                    <span className="amount">
                      <bdi>
                        <span className=""></span>
                        {item.price}€
                      </bdi>
                    </span>
                  </del>{" "}
                  <ins>
                    <span className="amount">
                      <bdi>
                        <span>
                          {parseFloat(
                            item.price - (item.price * item.sale) / 100
                          ).toFixed(2)}
                          €
                        </span>
                        {item.saleprice}
                      </bdi>
                    </span>
                  </ins>
                </span>
                <h3 className="product-title">
                  <Link
                    to={`/product/${item._id}`}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    title="testing product"
                  >
                    {item.title}
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
                    <span style={{ width: "100%" }}></span>
                  </div>
                  <div className="count-rating">
                    58 <span className="rating-text">Ratings</span>
                  </div>
                </div>
                <div className="product-count">
                  <div className="product-pcs">
                    die verfügbaren produkten : <span>26</span>
                  </div>
                </div>
                <div className="product-fade-block">
                  <button className="product-btn-fade"
                  onClick={() => {
                    addToCart(item);
                  }}>In den Warenkorb</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          className="product-content-fade border-info"
          style={{ marginBottom: "-49px" }}
        ></div>
        <div className="product-content-fade"></div>
      </div>
    </div>
  );
};
