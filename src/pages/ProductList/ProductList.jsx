// import { Products } from "../../components/Products/Products";
import { Anons } from "../../components/Anons/Anons";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import "./productList.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { BsArrowsFullscreen, BsHeart } from "react-icons/bs";
import { publicRequest } from "../../requestMethod";

export const ProductList = () => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products");
        setProducts(res.data);
      } catch (err) {}
    };
    getProduct();
  }, []);

  const handleFilter = (ecat) => {
    const result = products.filter((currentTarget) => {
      return currentTarget.category === ecat;
    });
    setProducts(result);
  };

  const setActiveSort = (e) => {
    const filterButtons = document.querySelectorAll(
      ".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button"
    );
    filterButtons.forEach((elem) => {
      elem.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <div>
      <Anons />
      <Header />
      <Container>
        <Row>
          <Col md="3">
            <div className="filterContainer">
              <div className="filterWrapper">
              
                <div className="categories-filter" >
                  <h4
                    className="pro-sidebar-title"
                    // onClick={() => setCatFilters(products)}
                  >
                    Kategorien
                  </h4>
                  <div className="sidebar-widget-list">
                    <ul>
                      <li>
                        <div className="sidebar-widget-list-left">
                          <button
                          onClick={(e) => {
                            handleFilter("Schreiben");
                            setActiveSort(e);
                          }}
                          >
                            <span className="checkmark" />Alle Kategorien
                          </button>
                          <button
                          onClick={(e) => {
                            handleFilter("Schreiben");
                            setActiveSort(e);
                          }}
                          >
                            <span className="checkmark" />Bürobedarf
                          </button>
                          <button
                          onClick={(e) => {
                            handleFilter("Schreiben");
                            setActiveSort(e);
                          }}
                          >
                            <span className="checkmark" />Papiere & Etiketten
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
</div>
            </div>
          </Col>
          <Col md="9"><div
                  className="products mobile-column-3 column-5"
                 
                >
            {products.map &&
              products.map((item) => (
                
                  <div className="product product-type-simple" key={item._id}>
                    <div className="product-wrapper product-type-3">
                      <div className="thumbnail-wrapper">
                        <div className="product-badges">
                          <span className="badge style-1 onsale">
                            {item.sale}%
                          </span>
                          <span className={item.available}></span>
                        </div>
                        <Link
                          to={`/product/${item._id}`}
                          style={{
                            color: "inherit",
                            textDecoration: "inherit",
                          }}
                        >
                          <img
                            className="p-img"
                            src={item.img[0].src}
                            alt="sas"
                          />
                        </Link>
                        <div className="product-buttons">
                          <Link
                            to={`/product/${item._id}`}
                            style={{
                              color: "inherit",
                              textDecoration: "inherit",
                            }}
                          >
                            <BsArrowsFullscreen
                              style={{
                                color: "inherit",
                                textDecoration: "inherit",
                              }}
                            />
                          </Link>

                          <Link
                            to="/"
                            className="detail-bnt quick-view-button"
                            style={{
                              color: "inherit",
                              textDecoration: "inherit",
                            }}
                          >
                            <BsHeart />
                          </Link>
                        </div>
                      </div>
                      <div className="content-wrapper">
                        <span className="price">
                          <del aria-hidden="true">
                            <span className="amount">
                              <bdi>
                                <span className=""></span>
                                {item.price}€
                              </bdi>
                            </span>
                          </del>{" "}
                          <ins>
                            <span className="amount">
                              <bdi>
                                <span>
                                  {parseFloat(
                                    item.price - (item.price * item.sale) / 100
                                  ).toFixed(2)}
                                  €
                                </span>
                                {item.saleprice}
                              </bdi>
                            </span>
                          </ins>
                        </span>
                        <h3 className="product-title">
                          <Link
                            to={`/product/${item.id}`}
                            style={{
                              color: "inherit",
                              textDecoration: "inherit",
                            }}
                            title="testing product"
                          >
                            {item.title}
                          </Link>
                        </h3>
                        <div className="product-meta">
                          <div className="product-available in-stock">
                            AUF LAGER
                          </div>
                        </div>
                        <div className="product-rating">
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span style={{ width: "100%" }}></span>
                          </div>
                          <div className="count-rating">
                            58 <span className="rating-text">Ratings</span>
                          </div>
                        </div>
                        <div className="product-fade-block">
                          <button className="product-btn-fade">
                            In den Warenkorb
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
              </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};
