import { Fragment } from "react";
import { Breadcrumb, Col, Container, Form, Row, Table } from "react-bootstrap";
import { Anons } from "../components/Anons";
import { Header } from "../components/Header";
import { Link, NavLink, useParams } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useEffect, useState } from "react";
import {
  addProduct,
  getCartCount,
  getSubTotal,
  getTotalAmount,
} from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { ProductType } from "../../interfaces/Products";
import { fetchSingleData } from "../hooks/apiService";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType>();
  const [currentImage, setCurrentImage] = useState("");
  const dispatch = useDispatch();
  const addToCart = (product: ProductType) => {
    dispatch(addProduct({ ...product }));
    dispatch(getCartCount());
    dispatch(getSubTotal());
    dispatch(getTotalAmount());
  };
  useEffect(() => {}, [dispatch]);
  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetchSingleData(
        `http://localhost:5000/products/${id}`
      );
      if (response !== undefined) {
        setProduct(response);
        setCurrentImage(response.img[0].src);
      }
    };
    fetchDataAsync();
  }, [id]);

  const handleImageClick = (src: string) => {
    setCurrentImage(src);
  };

  if (!product) {
    return (
      <div className="d-flex justify-content-center m-5">
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      </div>
    );
  }
  var sale;
  if (product?.sale < 1) {
    sale = "noSale";
  } else {
    sale = "";
  }
  return (
    <Container>
      <Anons />
      <Header />
      <Breadcrumb className="cart-breadcrumb">
        <li className="breadcrumb-item">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="breadcrumb-item" aria-current="page">
          <NavLink to={"/products"}>Produktliste</NavLink>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <NavLink to={"/products"}>{product.title}</NavLink>
        </li>
      </Breadcrumb>
      <div className="single-product-wrapper">
        <div className="product-wrapper">
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
          <div className="product-content">
            <Row>
              <Col lg="5">
                <div className="photo-gallery">
                  <div className="slider-wrapper">
                    <div className="photo-section">
                      <img
                        className="main-photo"
                        src={currentImage}
                        alt={product.title}
                      />
                      <div className="thumbnail-list">
                        {product.img.map((image) => (
                          <img
                            key={image.id}
                            src={image.src}
                            alt={product.title}
                            onClick={() => handleImageClick(image.src)}
                            className="thumbnail"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="7">
                <Row>
                  <div className="column-content">
                    <p className="price ">
                      <del className={`${sale}`}>{product.price} €</del>
                      <ins>
                        {(
                          product.price -
                          (product.price * product.sale) / 100
                        ).toFixed(2)}
                        €
                      </ins>
                    </p>
                    <div className="product-meta">
                      <div className="product-available in-stock">
                        {product.available}
                      </div>
                    </div>
                    <div className="product-details-short">
                      <h6>{product.descShort && product.descShort[0]}</h6>
                      <p>- {product.descShort && product.descShort[1]}</p>
                      <p>- {product.descShort && product.descShort[2]}</p>
                      <p>- {product.descShort && product.descShort[3]}</p>
                      <p>- {product.descShort && product.descShort[4]}</p>
                    </div>

                    <Form className="cart">
                      <Form.Select
                        aria-label="Color select"
                        
                      >
                        <option>{product.color}</option>
                      </Form.Select>
                      <br />
                      <Form.Select
                        aria-label="Size select"
                      >
                        <option>{product.size}</option>
                      </Form.Select>
                      <Link
                        to={"/cart"}
                        onClick={() => {
                          addToCart(product);
                        }}
                        className="button"
                      >
                        In den Warenkorb
                      </Link>
                    </Form>
                    <div className="product-actions">
                      <button className="wishlist-clear">
                        <span>in Einkaufslisten</span>
                      </button>
                    </div>
                    <div className="product-cat">
                      <span className="post-in">
                        Kategorie:{" "}
                        <p>
                          {product.category && product.category[0]},
                          {product.category && product.category[1]}
                        </p>
                      </span>
                    </div>
                    <div className="product-share">
                      Teilen :
                      <div className="social-share">
                        <ul>
                          <li>
                            <p className="whatsapp"></p>
                          </li>
                          <li>
                            <p className="facebook"></p>
                          </li>
                          <li>
                            <p className="instagram"></p>
                          </li>
                          <li>
                            <p className="linkdin"></p>
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
              <p>{product.description}</p>
            </Tab>
            <Tab eventKey="additional" title="Additional information">
              <div className="additional_information">
                <Table>
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

                    {product.specifications.map((obj, index) => (
                      <tr key={index}>
                        {Object.entries(obj).map(([key, value]) => (
                          <Fragment key={key}>
                            <th>{key}:</th>
                            <td>
                              <p>{value}</p>
                            </td>
                          </Fragment>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
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
