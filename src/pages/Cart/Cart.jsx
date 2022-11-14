import "./cart.scss";
import React, { useEffect } from "react";
import { Anons } from "../../components/Anons/Anons";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotalAmount,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
  getCartProducts,
  getCartCount,
  getSubTotal,
} from "../../redux/cartRedux";

export const Cart = () => {
  const dispatch = useDispatch();
  const { products, subAmount, totalAmount } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(getCartProducts());
    dispatch(getSubTotal());
    dispatch(getCartCount());
    dispatch(getTotalAmount());
  }, [dispatch]);

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
              <Link>warenkorb</Link>
            </li>
          </ul>
        </nav>
        <div className="cart" key={products._id}>
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
                    {products.map((product) => (
                      <tbody key={product._id}>
                        <tr className="cart-item">
                          <td className="product-thumbnail">
                            <Link to={`/product/${product._id}`}>
                              <img
                                className="product-image"
                                src={product.img && product.img[0].src}
                                alt={product.title}
                              />
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link to={`/product/${product._id}`}>
                              {product.title}
                              <span>Produkt ID :{product._id}</span>
                            </Link>
                          </td>
                          <td className="product-price">{product.price} €</td>
                          <td className="product-quantity">
                            <div className="quantity">
                              <div
                                className="quantity-btn"
                                onClick={() => {
                                  dispatch(decrementQuantity(product._id));
                                  dispatch(getSubTotal());
                                  dispatch(getCartCount());
                                  dispatch(getTotalAmount());
                                }}
                              >
                                <span className="icon-minus"></span>
                              </div>
                              <span className="text-input">  {product.quantity}</span>
                              <div
                                className="quantity-btn"
                                onClick={() => {
                                  dispatch(incrementQuantity(product._id));
                                  dispatch(getSubTotal());
                                  dispatch(getCartCount());
                                  dispatch(getTotalAmount());
                                }}
                              >
                                <span className="icon-plus"></span>
                              </div>
                            </div>
                          </td>
                          <td className="product-subtotal">
                            {" "}
                            {parseFloat(
                              product.price * product.quantity
                            ).toFixed(2)}{" "}
                            €
                          </td>
                          <td className="product-remove">
                            <Link>
                              <span
                                className="icon-cancel"
                                onClick={() => {
                                  dispatch(removeProduct(product._id));
                                  dispatch(getSubTotal());
                                  dispatch(getCartCount());
                                  dispatch(getTotalAmount());
                                }}
                              ></span>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    ))}
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
                          <td className="cart-subtotal-item">
                            {" "}
                            {parseFloat(subAmount).toFixed(2)} €
                          </td>
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
                                <label className="shipping-label">
                                  Flatrate: <span>3.50 €</span>
                                </label>
                              </li>
                              <li>
                                <input
                                  type="radio"
                                  className="shipping-method"
                                />
                                <label className="shipping-label">
                                  Lokale Aufnahme
                                </label>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="cart-order-total">
                          <th>Gesamtsumme</th>
                          <td>{parseFloat(totalAmount).toFixed(2)} €</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="checkout">
                      <Link to={"/checkout"}>
                        <button className="to-checkout">
                          weiter zur Kasse
                        </button>
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
