import { Link } from "react-router-dom";
import { Badge, Col, Container, Row } from "react-bootstrap";

import { useEffect, useState } from "react";
import {
  addProduct,
  getCartCount,
  getSubTotal,
  getTotalAmount,
} from "../../redux/cartRedux";
import { ProductType, Props } from "../../../interfaces/Products";
import { Timer } from "./Timer";
import { useAppDispatch } from "../../hooks/hooks";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const SpecialOffer = ({ products }: Props) => {
  const dispatch = useAppDispatch();
  const [productOnSale, setProductOnSale] = useState<ProductType[]>([]);
  const [rating, setRating] = useState(4);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <OverlayTrigger
            key={i}
            placement="top"
            overlay={
              <Tooltip id={`tooltip-top-${i}`}>
                {i < Math.floor(rating) ? "Selected" : "Half selected"}
              </Tooltip>
            }
          >
            <i
              className="bi bi-star-fill"
              color="gold"
              onClick={() => setRating(i + 1)}
              style={{ color: "gold" }}
            />
          </OverlayTrigger>
        );
      } else {
        stars.push(
          <OverlayTrigger
            key={i}
            placement="top"
            overlay={<Tooltip id={`tooltip-top-${i}`}>Not selected</Tooltip>}
          >
            <i
              className="bi bi-star-fill"
              onClick={() => setRating(i + 1)}
              style={{ cursor: "pointer", color: "gray" }}
            />
          </OverlayTrigger>
        );
      }
    }
    return stars;
  };
  
  useEffect(() => {
    const filteredProducts = products.filter((item) => item.sale > 12);
    setProductOnSale(filteredProducts);
  }, [products]);

  const handleAddToCart = (product: ProductType) => {
    dispatch(addProduct({ ...product }));
    dispatch(getCartCount());
    dispatch(getSubTotal());
    dispatch(getTotalAmount());
  };

  return (
    <Container className="spacial-offer">
      <Row className="module-header">
        <Col xl="6" className="column-header">
          <h4>
            Sonderangebote <p>der Woche!</p>
          </h4>
          <span>
            Sonderverkauf einiger Produkte. Diese Rabatte werden nicht
            wiederholt. Vergeuden Sie diese Gelegenheit nicht
          </span>
        </Col>
        <Col xl="6" className="column-countdown">
          <Timer />
        </Col>
      </Row>
      <Row className="module-body products">
        {productOnSale?.map((item) => (
          <Col xs="4" sm="4" md="2" lg="2" key={item.id} className="product">
            <div className="product-wrapper">
              <div className="thumbnail-wrapper">
                <Badge
                  bg="danger"
                  style={{ marginTop: "1rem", position: "absolute" }}
                >
                  {item.sale}%
                </Badge>
                <Link className="cart-image" to={`/products/${item.id}`}>
                  <img src={item.img[0].src} alt={item.title} />
                </Link>
                <div className="product-buttons">
                  <Link
                    to={`/products/${item.id}`}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <i className="bi bi-arrows-fullscreen" />
                  </Link>

                  <Link
                    to="/"
                    className="detail-bnt quick-view-button"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <i className="bi bi-heart" />
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
                  </del>
                  <ins>
                    <span className="amount">
                      <bdi>
                        <span>
                          {(
                            item.price -
                            (item.price * item.sale) / 100
                          ).toFixed(2)}
                          €
                        </span>
                      </bdi>
                    </span>
                  </ins>
                </span>
                <h3 className="product-title">
                  <Link
                    to={`/products/${item.id}`}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    title="testing product"
                  >
                    {item.title}
                  </Link>
                </h3>
                <div className="product-meta">
                  <div className="product-available in-stock">AUF LAGER</div>
                </div>
                <div className="rating">{renderStars()}</div>

                <div className="product-fade-block">
                  <button
                    className="product-btn-fade"
                    onClick={() => {
                      handleAddToCart(item);
                    }}
                  >
                    In den Warenkorb
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
