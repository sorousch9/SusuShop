import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  addProduct,
  getCartCount,
  getSubTotal,
  getTotalAmount,
} from "../redux/cartRedux";
import { ProductType, Props } from "../../interfaces/Products";
import { useAppDispatch } from "../hooks/hooks";

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
              <Link
                className="cart-image"
                style={{ color: "inherit", textDecoration: "inherit" }}
                to={`/products/${item.id}`}
              >
                <Card.Img src={item.img[0].src} style={{ padding: "1rem" }} />
              </Link>
              <div className="product-badges">
                <span className="badge onsale">{item.available}</span>
                {item.sale > 1 ? (
                  <span className="badge onsale">{item.sale}%</span>
                ) : (
                  ""
                )}
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
                  <span className="product-meta">{item.available}</span>
                </Card.Text>
                <Table borderless className="products-table">
                  <thead>
                    <tr>
                      <th>Verfügbar in:</th>
                      <td>
                        Größe:{" "}
                        {typeof item.size === "object"
                          ? item.size.join(" , ")
                          : item.size}
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        Farbe:{" "}
                        {typeof item.color === "object"
                          ? item.color.join(" , ")
                          : item.color}
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <div>
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
