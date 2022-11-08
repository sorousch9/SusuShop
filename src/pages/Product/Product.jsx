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
} from "../../redux/cartRedux";
import { publicRequest } from "../../requestMethod";
import { useDispatch } from "react-redux";
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
            <Link>Product</Link>
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
                      {product.img && product.img.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="img-warpper" >
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
                      {product.img && product.img.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="img-warpper">
                          <img
                            src={item && item.src}
                            alt={product.title}
                            style={{ padding: "0.6rem", marginTop: "rem" }}
                          />
                        </div>
                      </SwiperSlide> ))}
                    </Swiper>
                  </div>
                </div>
              </Col>
              <Col lg="7">
                <Row>
                  <div className="column-content">
                    <p className="price">
                      10 €
                      <del>4 €</del>
                      <ins>3 €</ins>
                    </p>
                    <div className="product-meta">
                      <div className="product-available in-stock">
                       {product.available}
                      </div>
                    </div>
                    <div className="product-details-short">
                      <p>
                       {product.desc}
                      </p>
                    </div>
                    <form className="cart">
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
                      <button
                        onClick={() => {
                          addToCart(product);
                        }}
                      >
                        In den Warenkorb
                      </button>
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
                    <div className="alart-message">Lieferzeit: jjj</div>
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                quasi qui expedita, molestias dolores aliquid corrupti, eos
                voluptatibus placeat ipsum voluptates libero tenetur deserunt
                aspernatur, quis ducimus animi obcaecati itaque.
              </p>
            </Tab>
            <Tab eventKey="additional" title="Additional information">
              <div className="additional_information">
                <table>
                  <tbody>
                    <tr>
                      <th>Marke:</th>
                      <td>
                        <p> test , test</p>
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
