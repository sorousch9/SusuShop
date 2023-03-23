import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";
import { BsSearch, BsCheck2Square } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { VscSignOut, VscHeart } from "react-icons/vsc";
import { useAppSelector } from "../hooks/hooks";
import { Categories } from "./Categories";
import { Col, Container, Form, NavDropdown, Row } from "react-bootstrap";

export const Header = () => {
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
              <div className="input-item">
                <input type="text" placeholder="Suche" />
                <i>
                  <BsSearch />
                </i>
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
                      <i className="tab-ico">
                        <AiOutlineUser />
                      </i>
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
                      <i className="tab-ico">
                        <GoLocation />
                      </i>
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
                      <i className="tab-ico">
                        <BsCheck2Square />
                      </i>
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
                      <i className="tab-ico">
                        <VscHeart />
                      </i>
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
                      <i className="tab-ico">
                        <VscSignOut />
                      </i>
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
              <i className="bi bi-bag header" />
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
