import { useEffect } from "react";
import { Anons } from "../components/Anons";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer/Footer";
import {
  Accordion,
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  ProgressBar,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  getTotalAmount,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
  getCartProducts,
  getCartCount,
  getSubTotal,
} from "../redux/cartRedux";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

export const Cart = () => {
  const dispatch = useAppDispatch();
  const { products, subAmount, totalAmount, shipPrice, tax } = useAppSelector(
    (state) => state.cart
  );
  useEffect(() => {
    dispatch(getCartProducts());
    dispatch(getSubTotal());
    dispatch(getCartCount());
    dispatch(getTotalAmount());
  }, [dispatch, totalAmount]);

  function Progress() {
    const now = totalAmount;
    if (now >= 250) {
      return (
        <ProgressBar max={250} now={now} label={"Erfolg !"} variant="success" />
      );
    } else {
      return (
        <ProgressBar
          max={250}
          now={now}
          label={`${now.toFixed(2)}€`}
          variant="danger"
        />
      );
    }
  }
  return (
    <div>
      <Anons />
      <Header />
      <Container>
        <nav className="cart-breadcrumb">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <span />
              <p>warenkorb</p>
            </li>
          </ul>
        </nav>
        <div className="cart">
          <Row>
            <Col md="12">
              <div className="cart-wrapper">
                <Form className="cart-form">
                  <div className="free-progress-bar">
                    {totalAmount >= 250 ? (
                      <p className="free-shipping-notice">
                        Ihr Warenkorb enthält kostenlosen Versand{" "}
                      </p>
                    ) : (
                      <div className="free-shipping-notice">
                        Nur
                        <span className="price-amount">
                          {(250 - totalAmount).toFixed(2)}€
                        </span>
                        in den Warenkorb legen und versandkostenfrei erhalten!
                      </div>
                    )}
                    <Progress />
                  </div>
                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>&nbsp;</th>
                        <th>Produkt</th>
                        <th>Einzelpreis</th>
                        <th>Menge</th>
                        <th>Gesamtpreis</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    {products.map((product) => (
                      <tbody key={product.id}>
                        <tr className="cart-item">
                          <td className="product-thumbnail">
                            <Link to={`/products/${product.id}`}>
                              <img
                                className="product-image"
                                src={product.img && product.img[0].src}
                                alt={product.title}
                              />
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link to={`/products/${product.id}`}>
                              {product.title}
                              <span>Marke :{product.brand}</span>
                              <span>Farbe :{product.color}</span>
                            </Link>
                          </td>
                          <td className="product-price">{product.price} €</td>
                          <td className="product-quantity">
                            <ButtonGroup className="quantity">
                              {typeof product.quantity === "number" &&
                              product.quantity <= 1 ? (
                                <Button
                                  className="quantity-btn"
                                  disabled
                                  onClick={() => {
                                    dispatch(decrementQuantity(product.id));
                                    dispatch(getSubTotal());
                                    dispatch(getCartCount());
                                    dispatch(getTotalAmount());
                                  }}
                                >
                                  <span className="icon-minus"></span>
                                </Button>
                              ) : (
                                <Button
                                  className="quantity-btn"
                                  onClick={() => {
                                    dispatch(decrementQuantity(product.id));
                                    dispatch(getSubTotal());
                                    dispatch(getCartCount());
                                    dispatch(getTotalAmount());
                                  }}
                                >
                                  <span className="icon-minus"></span>
                                </Button>
                              )}

                              <span className="text-input">
                                {product.quantity}
                              </span>
                              <Button
                                className="quantity-btn"
                                onClick={() => {
                                  dispatch(incrementQuantity(product.id));
                                  dispatch(getSubTotal());
                                  dispatch(getCartCount());
                                  dispatch(getTotalAmount());
                                }}
                              >
                                <span className="icon-plus"></span>
                              </Button>
                            </ButtonGroup>
                          </td>
                          <td className="product-subtotal">
                            {" "}
                            {(product.price * product.quantity).toFixed(2)} €
                          </td>
                          <td className="product-remove">
                            <p>
                              <span
                                className="icon-cancel"
                                onClick={() => {
                                  dispatch(removeProduct(product.id));
                                  dispatch(getSubTotal());
                                  dispatch(getCartCount());
                                  dispatch(getTotalAmount());
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="25"
                                  height="25"
                                  fill="currentColor"
                                  className="bi bi-trash"
                                  viewBox="0 0 16 16"
                                  style={{ cursor: "pointer" }}
                                >
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                  <path
                                    fillRule="evenodd"
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                  />
                                </svg>
                              </span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </Table>
                  <div className="actions">
                    <div className="actions-wrapper">
                      <div className="coupon">
                        <input
                          type="text"
                          className="input-text"
                          placeholder="Gutscheincode"
                        />
                        <button type="submit" className="coupon-btn">
                          Gutschein anwenden
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
                <div className="cart-info">
                  <div className="cart-totals">
                    <h2>Gesamtsumme</h2>
                    <table cellSpacing={0} className="shop-info-table">
                      <tbody>
                        <tr className="cart-subtotal">
                          <th>Zwischensumme</th>
                          <td className="cart-subtotal-item">
                            {subAmount.toFixed(2)} €
                          </td>
                        </tr>
                        <tr className="cart-shopping-totals">
                          <th style={{ fontSize: ".8rem" }}>
                            Versandkosten (Paket)
                          </th>
                          <td className="shopping" style={{ fontSize: "1rem" }}>
                            {shipPrice}
                          </td>
                        </tr>

                        <tr>
                          <th style={{ fontSize: ".8rem", fontWeight: "400" }}>
                            alle Angaben in Euro, inkl. Steuer
                          </th>
                        </tr>
                        <tr className="cart-order-total">
                          <th>Gesamtsumme</th>
                          <td>{totalAmount.toFixed(2)} €</td>
                        </tr>
                      </tbody>
                    </table>
                    <Accordion flush>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Guthaben </Accordion.Header>
                        <Accordion.Body>
                          Leider beträgt dein Guthaben aktuell 0,00 €.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <div className="checkout">
                      <Link to={"/cart"}>
                        <button className="to-checkout">
                          Weiter zur Kasse
                        </button>
                      </Link>
                    </div>
                    <div className="co2-ship">
                      <span>Wir liefern CO2-neutral</span> durch Kompensation
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
};
