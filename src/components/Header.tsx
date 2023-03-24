import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import { useAppSelector } from "../hooks/hooks";
import { Categories } from "./Categories";
import {
  Col,
  Container,
  Form,
  NavDropdown,
  Overlay,
  Popover,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Fragment, useEffect, useState } from "react";
import { ProductType } from "../../interfaces/Products";

import axios from "axios";

export const Header = () => {
  const [query, setQuery] = useState<string>("ecco");
  const [searchProducts, setSearchProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const handleSearch = async () => {
      const response = await axios.get<ProductType[]>(
        `http://localhost:5000/products?q=${query}`
      );
      setSearchProducts(response.data);
    };
    handleSearch();
  }, [query]);
  const handleSearch = async () => {
    const response = await axios.get<ProductType[]>(
      `http://localhost:5000/products?q=${query}`
    );
    setSearchProducts(response.data);
  };
  const quantity = useAppSelector((state) => state.cart.total);
  return (
    <Container className="header-main">
      <Row>
        <Col md="3" lg="3">
          <div className="logo">
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <img src={logo} alt="Susu shop" />
              <span>die Nr. 1 für B2B Kunden mit günstigen Preisen</span>
            </Link>
          </div>
        </Col>
        <Col md="5" lg="5" className="center">
          <div className="search-style">
            <Form>
              <NavDropdown title="Kategorien">
                <NavDropdown.Item>
                  <Categories />
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    to="/products"
                    style={{
                      color: "inherit",
                      textDecoration: "inherit",
                    }}
                  >
                    Produktliste
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <div className="search-input-container">
                <label htmlFor="search-input">Search:</label>
                <div className="input-item">
                  <input
                    type="text"
                    id="search-input"
                    placeholder="Enter search query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                  />
                  <button onClick={handleSearch}>
                    <i className="bi bi-search" />
                  </button>
                </div>
                {searchProducts.length > 0 && (
                  <ul className="search-results">
                    {searchProducts.map((product) => (
                      <li key={product.id}>{product.title}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Form>
          </div>
        </Col>
        <Col md="4" lg="4" className="right">
          <div className="header-action">
            <div className="header-action-icon">
              <i className="bi bi-chat-square-dots header" />
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
                className="text-link"
              >
                <span className="wishlist"></span>

                <span className="herder-span">Service</span>
              </Link>
            </div>

            <div className="header-action-icon">
              <i className="bi bi-person header" />
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
                className="text-link"
              >
                <span className="herder-span">Mein Konto</span>
              </Link>
              <div className="cart-dropdown-wrap">
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{
                        color: "inherit",
                        textDecoration: "inherit",
                      }}
                      className="text-link"
                    >
                      <i className="tab-ico bi bi-person" />
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      style={{
                        color: "inherit",
                        textDecoration: "inherit",
                      }}
                      className="text-link"
                    >
                      <i className="tab-ico bi bi-geo-alt" />
                      Order Tracking
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      style={{
                        color: "inherit",
                        textDecoration: "inherit",
                      }}
                      className="text-link"
                    >
                      <i className="tab-ico bi bi-check2-circle" />
                      Mein Gutschein
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      style={{
                        color: "inherit",
                        textDecoration: "inherit",
                      }}
                      className="text-link"
                    >
                      <i className="tab-ico bi bi-heart" />
                      Meine Wunschliste
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/"
                      style={{
                        color: "inherit",
                        textDecoration: "inherit",
                      }}
                      className="text-link"
                    >
                      <i className="tab-ico bi bi-box-arrow-right" />
                      Ausloggen
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-action-icon ">
              <i className="bi bi-card-checklist header" />
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
                className="text-link"
              >
                <span className="wishlist count-style">2</span>
                <span className="herder-span">Einkaufslisten</span>
              </Link>
            </div>
            <div className="header-action-icon">
              <i className="bi-bag header" />
              <Link
                to="/cart"
                style={{ color: "inherit", textDecoration: "inherit" }}
                className="text-link"
              >
                <span className="corb count-style"> {quantity}</span>
                <span className="herder-span ">Warenkorb</span>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
