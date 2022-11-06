import "./product.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Anons } from "../../components/Anons/Anons";
import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper";
import photo1 from "../../assets/products-img/bohrschrauber.png";
import photo2 from "../../assets/products-img/Brother.png";
import photo3 from "../../assets/products-img/dewalt_dcd991nt.png";
import photo4 from "../../assets/products-img/tresor_burg-waechter_pointsafe.png";

export default function Product() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
      <div className="single-product-wrapper">
        <div className="product-wrapper">
          <div className="product-header">
            <h2 className="product-title">title</h2>
            <div className="product-meta">
              <div className="product-brand">
                <table>
                  <tbody>
                    <tr>
                      <th>Marke:</th>
                      <td>
                        <p> cat1 , cat2</p>
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
                      <SwiperSlide>
                        <div className="img-warpper">
                          <img src={photo1} alt="" style={{padding: "2rem"}}/>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="img-warpper">
                          <img src={photo2} alt="" style={{padding: "2rem"}}/>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="img-warpper">
                          <img src={photo3} alt="" style={{padding: "2rem"}}/>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="img-warpper">
                          <img src={photo4} alt="" style={{padding: "2rem"}} />
                        </div>
                      </SwiperSlide>
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
                      <SwiperSlide>
                        <div className="img-warpper">
                          <img src={photo1} alt="" style={{padding: "0.6rem",marginTop:"rem"}}/>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="img-warpper">
                          <img src={photo2} alt="" style={{padding: "0.6rem",marginTop:"rem"}}/>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="img-warpper">
                          {" "}
                          <img src={photo3} alt="" style={{padding: "0.6rem",marginTop:"rem"}}/>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="img-warpper">
                          {" "}
                          <img src={photo4} alt="" style={{padding: "0.6rem",marginTop:"rem"}}/>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </Col>
              <Col lg="7">
                <Row>
                  <div className="column-content">
                    <p className="price">
                      <del>4.29 €</del>
                      <ins>3.29 €</ins>
                    </p>
                    <div className="product-meta">
                      <div className="product-available in-stock">
                        AUF LAGER
                      </div>
                    </div>
                    <div className="product-details-short">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Laboriosam harum minus, ullam, voluptatum ipsum ad
                        officia voluptate eum exercitationem sed, sit eligendi
                        voluptatibus? Nulla aliquam cupiditate ducimus quae quis
                        suscipit?
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
                      <button>In den Warenkorb</button>
                    </form>
                    <div className="product-actions">
                      <button className="wishlist-clear">
                        <span>in Einkaufslisten</span>
                      </button>
                    </div>
                    <div className="product-cat">
                      <span className="post-in">
                        Kategorie: <Link>cat1</Link>
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
                      Lieferzeit: sofort lieferbar
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
