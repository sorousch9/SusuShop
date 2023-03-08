import "./products.scss";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
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