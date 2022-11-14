import "./product.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Anons } from "../../components/Anons/Anons";
import { Header } from "../../components/Header/Header";
import { Link, useLocation } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper";
import {
  addProduct,
  getCartCount,
  getSubTotal,
  getTotalAmount,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/cartRedux";
import { publicRequest } from "../../requestMethod";
import { useDispatch, useSelector } from "react-redux";

export default function Product() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(addProduct({ ...product }));
    dispatch(getCartCount());
    dispatch(getSubTotal());
    dispatch(getTotalAmount());
  };
  useEffect(() => {}, [dispatch]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  var sale;
  if (product.sale < 1) {
    sale = "noSale";
  } else {
    sale = "";
  }
  const { products } = useSelector((state) => state.cart);
  const quantityProduct = products.filter((item) => {
    return item._id === product._id;
  });
  var quantity = quantityProduct[0]?.quantity;
 console.log(quantity);
  return (
    <Container>
      <Anons />
      <Header />
      <nav className="cart-breadcrumb">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <span />
            <Link>{product.title}</Link>
          </li>
        </ul>
      </nav>
      <div className="single-product-wrapper" key={product.id}>
        <div className="product-wrapper">
          <div className="product-header">
            <h2 className="product-title">{product.title}</h2>
            <div className="product-meta">
              <div className="product-brand">
                <table>
                  <tbody>
                    <tr>
                      <th>Marke:</th>
                      <td>
                        <p> {product.brand} </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="product-rating"></div>
            </div>
          </div>
          <div className="product-content">
            <Row>
              <Col lg="5">
                <div className="photo-gallery">
                  <div className="product-badges">
                    <span className="badge style-1 onsale"></span>
                  </div>
                  <div className="slider-wrapper">
                    <Swiper
                      spaceBetween={10}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Thumbs]}
                      className="mySwiper2"
                    >
                      {product.img &&
                        product.img.map((item) => (
                          <SwiperSlide key={item.id}>
                            <div className="img-warpper">
                              <img
                                src={item && item.src}
                                alt={product.title}
                                style={{ padding: "2rem" }}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      spaceBetween={10}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Thumbs]}
                      className="mySwiper"
                    >
                      {product.img &&
                        product.img.map((item) => (
                          <SwiperSlide key={item.id}>
                            <div className="img-warpper">
                              <img
                                src={item && item.src}
                                alt={product.title}
                                style={{ padding: "0.6rem", marginTop: "rem" }}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  </div>
                </div>
              </Col>
              <Col lg="7">
                <Row>
                  <div className="column-content">
                    <p className="price ">
                      <del className={`${sale}`}>{product.price} €</del>
                      <ins>
                        {" "}
                        {parseFloat(
                          product.price - (product.price * product.sale) / 100
                        ).toFixed(2)}
                        €
                      </ins>
                    </p>
                    <div className="product-meta">
                      <div className="product-available in-stock">
                        {product.available && product.available[0]}
                      </div>
                    </div>
                    <div className="product-details-short">
                      <h6>{product.descShort && product.descShort[0]}</h6>
                      <p>- {product.descShort && product.descShort[1]}</p>
                      <p>- {product.descShort && product.descShort[2]}</p>
                      <p>- {product.descShort && product.descShort[3]}</p>
                      <p>- {product.descShort && product.descShort[4]}</p>
                    </div>
                    <form className="cart">
                      <div className="quantity">
                        <button
                          className="quantity-btn"
                          type="button"
                          onClick={() => {
                            dispatch(decrementQuantity(product._id));
                            dispatch(getSubTotal());
                            dispatch(getCartCount());
                            dispatch(getTotalAmount());
                          }}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          aria-label="quantityCount"
                          defaultValue={quantity == undefined ? 1 : quantity}
                          readOnly
                          className="text-input"
                        />
                        <button
                          className="quantity-btn"
                          type="button"
                          onClick={() => {
                            dispatch(incrementQuantity(product._id));
                            dispatch(getSubTotal());
                            dispatch(getCartCount());
                            dispatch(getTotalAmount());
                          }}
                        >
                          +
                        </button>
                      </div>
                      <Link
                      to={"/cart"}
                       onClick={() => {
                        addToCart(product);
                      }}
                        className="button"
                      >
                        In den Warenkorb
                      </Link>
                    </form>
                    <div className="product-actions">
                      <button className="wishlist-clear">
                        <span>in Einkaufslisten</span>
                      </button>
                    </div>
                    <div className="product-cat">
                      <span className="post-in">
                        Kategorie:{" "}
                        <Link>
                          {product.category && product.category[0]},
                          {product.category && product.category[1]}
                        </Link>
                      </span>
                    </div>
                    <div className="product-share">
                      Teilen :
                      <div className="social-share">
                        <ul>
                          <li>
                            <Link className="whatsapp"></Link>
                          </li>
                          <li>
                            <Link className="facebook"></Link>
                          </li>
                          <li>
                            <Link className="instagram"></Link>
                          </li>
                          <li>
                            <Link className="linkdin"></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="info-content">
                    <div className="alart-message">
                      Lieferzeit: {product.available}
                    </div>
                    <div className="icon-messages">
                      <ul>
                        <li>
                          <span className="icon shipping"></span>
                          <div className="message">
                            Kostenloser Versand gilt für alle Bestellungen über
                            50 €
                          </div>
                        </li>
                        <li>
                          <span className="icon orginal"></span>
                          <div className="message">
                            die Echtheit des Produkts garantiert
                          </div>
                        </li>
                        <li>
                          <span className="icon return"></span>
                          <div className="message">
                            14 Tag Rückgaberecht, wenn Sie Ihre Meinung ändern
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <div className="tabs-wrapper">
          <Tabs
            className="tabs"
            defaultActiveKey="description"
            id="fill-tab-example"
            justify
          >
            <Tab
              eventKey="description"
              title="Description"
              className="description"
            >
              <p>
                Damit Ihr indess erkennt, woher dieser ganze Irrthum gekommen
                ist, und weshalb man die Lust anklagt und den Schmerz lobet, so
                will ich Euch Alles eröffnen und auseinander setzen, was jener
                Begründer der Wahrheit und gleichsam Baumeister des glücklichen
                Lebens selbst darüber gesagt hat. Niemand, sagt er, verschmähe,
                oder hasse, oder fliehe die Lust als solche, sondern weil grosse
                Schmerzen ihr folgen, wenn man nicht mit Vernunft ihr
                nachzugehen verstehe. Ebenso werde der Schmerz als solcher von
                Niemand geliebt, gesucht und verlangt, sondern weil mitunter
                solche Zeiten eintreten, dass man mittelst Arbeiten und
                Schmerzen eine grosse Lust sich zu verschaften suchen müsse. Um
                hier gleich bei dem Einfachsten stehen zu bleiben, so würde
                Niemand von uns anstrengende körperliche Übungen vornehmen, wenn
                er nicht einen Vortheil davon erwartete. Wer dürfte aber wohl
                Den tadeln, der nach einer Lust verlangt, welcher keine
                Unannehmlichkeit folgt, oder der einem Schmerze ausweicht, aus
                dem keine Lust hervorgeht
              </p>
            </Tab>
            <Tab eventKey="additional" title="Additional information">
              <div className="additional_information">
                <table>
                  <tbody>
                    <tr>
                      <th>Marke:</th>
                      <td>
                        <p> {product.brand}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Size:</th>
                      <td>
                        <p> {product.size}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>Farbe:</th>
                      <td>
                        <p> {product.color}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
              <div className="tab-panel reviews">Reviews</div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <Footer />
    </Container>
  );
}
