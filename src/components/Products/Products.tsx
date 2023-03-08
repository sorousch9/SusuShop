import "./products.scss";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BsArrowsFullscreen, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  addProduct,
  getCartCount,
  getSubTotal,
  getTotalAmount,
} from "../../redux/cartRedux";
import { ProductType, Props } from "../../../interfaces/Products";
import { useAppDispatch } from "../../hooks/hooks";

export const Products = ({ products }: Props) => {
  const dispatch = useAppDispatch();
  const addToCart = (product: ProductType) => {
    dispatch(addProduct({ ...product }));
    dispatch(getCartCount());
    dispatch(getSubTotal());
    dispatch(getTotalAmount());
  };

  return (
    <Container className="my-3">
      <Row xs={2} md={3} lg={4} className="g-4">
        {products.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img
                variant="center"
                style={{ padding: "1.3rem" }}
                src={item.img[0].src}
              />
              <Card.Body>
                <Card.Title className="text-truncate">
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to={`/products/${item.id}`}
                  >
                    {item.title}
                  </Link>
                </Card.Title>
                <Card.Text className="card-text">{item.brand}</Card.Text>
                <Card.Text className="card-text">
                  <span className="cart-price">
                    Prise:
                    {item.sale > 0 ? (
                      <span>
                        <del>
                          <bdi>{item.price} €</bdi>
                        </del>
                        <ins>
                          <bdi>
                            {(
                              item.price -
                              (item.price * item.sale) / 100
                            ).toFixed(2)}
                            €
                          </bdi>
                        </ins>
                      </span>
                    ) : (
                      <span>
                        <bdi> {item.price.toFixed(2)} €</bdi>
                      </span>
                    )}
                  </span>
                  <div className="product-meta">
                    {"->"}
                    {item.available[0]}
                  </div>
                </Card.Text>
                <div className="d-grid">
                  <Button
                    variant="primary"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    In den Warenkorb
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

{
  /* 
            <div className="list-product-wrapper">
              <div className="list-thumbnail-wrapper">
                <div className="product-badges">
                  <span className={item.sale > 0 ? "badge style-1 onsale" : ""}>
                    {item.sale}%
                  </span>
                  <span className={item.available}></span>
                </div>
                <Link
                  to={`/products/${item.id}`}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <img src={item.img[0].src} alt="sas" />
                </Link>
                <div className="product-buttons">
                  <Link
                    to={`/products/${item.id}`}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <BsArrowsFullscreen
                      style={{
                        color: "inherit",
                        textDecoration: "inherit",
                      }}
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
              <div className="list-content-wrapper">
                <span className="price">
                  <del aria-hidden="true">
                    <span className="amount">
                      <bdi>{item.price}€</bdi>
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
                <h3 className="list-product-title">
                  <Link
                    to={`/products/${item.id}`}
                    
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
                <button
                  className="list-product-btn-fade"
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  In den Warenkorb
                </button>
              </div>
            </div> */
}
