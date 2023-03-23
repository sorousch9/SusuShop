import { Link } from "react-router-dom";
import p7718687 from "../../assets/7718687.jpg";
import { Categories } from "../Categories";
import { useEffect, useState } from "react";
import {
  addProduct,
  getCartCount,
  getSubTotal,
  getTotalAmount,
} from "../../redux/cartRedux";
import { ProductType, Props } from "../../../interfaces/Products";
import { useAppDispatch } from "../../hooks/hooks";
import { Badge, Card, Col, Container, Image, Row } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const CustomerOpinions = ({ products }: Props) => {
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

  const dispatch = useAppDispatch();
  const handleAddToCart = (product: ProductType) => {
    dispatch(addProduct({ ...product }));
    dispatch(getCartCount());
    dispatch(getSubTotal());
    dispatch(getTotalAmount());
  };

  useEffect(() => {
    const filteredProducts = products
      .slice(0, 10)
      .filter((item) => item.onSale === true);
    setProductOnSale(filteredProducts);
  }, [products]);

  return (
    <Container className="customerOpinions">
      <Row>
        <Col>
          <h4 className="entry-title">Bei unseren Kunden beliebt</h4>
          <div className="entry-description">
            zweite Reihe Aktionen und Angebote "Bei unseren Kunden beliebt"
          </div>
        </Col>
      </Row>
      <Row className="module-body">
        <Col xs="12" sm="12" md="12" lg="5">
          <Row>
            <Col xs="8" sm="9" md="6" lg="6">
              <div className="categories-links">
                <ul>
                  <li>
                    <Categories />
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs="4" sm="3" md="6" lg="6">
              <Card>
                <Card.Img
                  src={p7718687}
                  alt="tets"
                  className="module-body-img"
                />
                <Card.ImgOverlay>
                  <Card.Title style={{ color: "#ededed" }}>Qualität</Card.Title>
                  <Card.Text style={{ color: "#ededed" }}>
                    Nur in Susu shop
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs="12" sm="12" md="12" lg="7">
          <Row className="products">
            {productOnSale?.map((item) => (
              <Col
                xs="6"
                sm="6"
                md="4"
                lg="4"
                className="product"
                key={item.id}
              >
                <div className="product-wrapper">
                  <div className="thumbnail-wrapper">
                    <Badge bg="danger" style={{ marginTop: "1rem" }}>
                      {item.sale}%
                    </Badge>

                    <Link className="cart-image" to={`/products/${item.id}`}>
                      <Image src={item.img[0].src} />
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
                      </del>{" "}
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
                      <div className="product-available in-stock">
                        AUF LAGER
                      </div>
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
        </Col>
      </Row>
    </Container>
  );
};
