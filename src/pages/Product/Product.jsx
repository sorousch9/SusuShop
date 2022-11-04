import "./product.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Anons } from "../../components/Anons/Anons";
import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

export default function Product() {
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
                  <tr>
                    <th>Marke:</th>
                    <td>
                      <p> cat1 , cat2</p>
                    </td>
                  </tr>
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
                  <div className="slider-wrapper">swiper api</div>
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
                    <div className="alart-message">Lieferzeit: sofort lieferbar</div>
                    <div className="icon-messages">
                      <ul>
                        <li>
                          <span className="icon"></span>
                          <div className="message">
                            Kostenloser Versand gilt für alle Bestellungen über
                            50 €
                          </div>
                        </li>
                        <li>
                          <span className="icon"></span>
                          <div className="message">
                            Kostenloser Versand gilt für alle Bestellungen über
                            50 €
                          </div>
                        </li>
                        <li>
                          <span className="icon"></span>
                          <div className="message">
                            Kostenloser Versand gilt für alle Bestellungen über
                            50 €
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
        <div className="tabs-wrapper">aaaaaaaaaaaaaaaaaaa</div>
      </div>
      <Footer />
    </Container>
  );
}
