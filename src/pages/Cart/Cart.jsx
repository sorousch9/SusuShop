import "./cart.scss";
import React from "react";
import { Anons } from "../../components/Anons/Anons";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import p1 from "../../assets/products-img/bohrschrauber.png";

export const Cart = () => {
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
              <Link>Cart</Link>
            </li>
          </ul>
        </nav>
        <div className="cart">
          <Row>
            <Col md="12">
              <div className="cart-wrapper">
                <form className="cart-form">
                  <div className="free-progress-bar">
                    <div className="free-shipping-notice">
                      Nur
                      <span className="price-amount"> 5€ </span>
                      in den Warenkorb legen und versandkostenfrei erhalten!
                    </div>
                    <div className="raw-progress-bar">
                      <span
                        className="progress"
                        style={{ width: "85%" }}
                      ></span>
                    </div>
                  </div>
                  <table className="table">
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
                    <tbody>
                      <tr className="cart-item">
                        <td className="product-thumbnail">
                          <Link to={"/"} target="_blank">
                            <img className="product-image" src={p1} alt="" />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link to={"/"} target="_blank">
                            Landre Collegeblock 100050247
                          </Link>
                        </td>
                        <td className="product-price">178.22 €</td>
                        <td className="product-quantity">
                          <div className="quantity">
                            <div className="quantity-btn">
                              <span className="icon-minus"></span>
                            </div>
                            <input
                              className="text-input"
                              type="text"
                              defaultValue={1}
                            />
                            <div className="quantity-btn">
                              <span className="icon-plus"></span>
                            </div>
                          </div>
                        </td>
                        <td className="product-subtotal">178.22 €</td>
                        <td className="product-remove">
                          <Link>
                            <span className="icon-cancel"></span>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                </form>
                <div className="cart-info">
                  <div className="cart-totals">
                    <h2>Gesamtsumme</h2>
                    <table cellSpacing={0} className="shop-info-table">
                      <tbody>
                        <tr className="cart-subtotal">
                          <th>Zwischensumme</th>
                          <td className="cart-subtotal-item"> 178 €</td>
                        </tr>
                        <tr className="cart-shopping-totals">
                          <th>Versand</th>
                          <td className="shopping">
                            <ul>
                              <li>
                                <input
                                  type="radio"
                                  className="shipping-method"
                                  defaultChecked
                                />
                                <label
                                  className="shipping-label"
                                >
                                  Flatrate: <span>3.50 €</span>
                                </label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  className="shipping-method"
                                />
                                <label
                                  className="shipping-label"
                                >
                                  Lokale Aufnahme
                                </label>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="cart-order-total">
                          <th>Gesamtsumme</th>
                          <td>178 €</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="checkout">
                      <Link to={"/checkout"}>
                        <button className="to-checkout">weiter zur Kasse</button>
                      </Link>
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
