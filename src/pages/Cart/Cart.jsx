import "./cart.scss";

import React from "react";
import { Anons } from "../../components/Anons/Anons";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                      <span className="price-amount">€ *5</span>
                      in den Warenkorb legen und versandkostenfrei erhalten!
                    </div>
                    <div className="raw-progress-bar">
                      <span
                        className="progress"
                        style={{ width: "84%" }}
                      ></span>
                    </div>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">&nbsp;</th>
                        <th className="product-name">Produkt</th>
                        <th className="product-price">Einzelpreis</th>
                        <th className="product-quantity">Menge</th>
                        <th className="product-subtotal">Gesamtpreis</th>
                        <th className="product-remove">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart-item">
                        <td className="product-thumbnail">
                          <Link to={"/"} target="_blank">
                            <img className="product-image" src={""} alt="" />
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
                            <div className="quantity-btn minus">
                              <span className="icon-minus"></span>
                            </div>
                            <input className="text-input" type="text" />
                            <div className="quantity-btn plus">
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

                      <tr className="cart-coupon"></tr>
                    </tbody>
                  </table>
                </form>
                <div className="cart-info"></div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
};
