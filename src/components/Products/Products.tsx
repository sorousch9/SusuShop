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
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((item) => (
          <Col key={item.id}>
            <Card>
              <div className="cart-image">
                <Card.Img src={item.img[0].src} style={{ padding: "1rem" }} />
              </div>

              <Card.Body>
                <Card.Title className="text-truncate">
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to={`/products/${item.id}`}
                  >
                    {item.title}
                  </Link>
                </Card.Title>
                <Card.Text className="card-text" style={{fontWeight:"bold"}}>{item.brand.toUpperCase()}</Card.Text>
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
                  <div className="product-meta">{item.available}</div>
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
