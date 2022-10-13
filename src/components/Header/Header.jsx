import "./header.scss";
import logo from "../../assets/LOGO.png";
import React from "react";
import usericon from "../../assets/icon-user.svg";
import carticon from "../../assets/icon-cart.svg";
import hearticon from "../../assets/icon-heart.svg";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Badge } from "@mui/material";

export const Header = () => {
  return (
    <Container>
      <Row>
        <Col md="2">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="beuroMarkt AG" />
            </a>
          </div>
        </Col>
        <Col md="10">
          <div class="header-right">
            <div class="search-style">
              <form>
                <select class="select-active">
                  <option>All Categories</option>
                  <option>Women's</option>
                  <option>Men's</option>
                  <option>Cellphones</option>
                  <option>Computer</option>
                  <option>Electronics</option>
                  <option> Accessories</option>
                  <option>Home & Garden</option>
                  <option>Luggage</option>
                  <option>Shoes</option>
                  <option>Mother & Kids</option>
                </select>
                <input type="text" placeholder="Search" value="" />
              </form>
            </div>
            <div class="header-action-right">
              <div className="header-action">
                <div className="header-action-icon">
                  <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    className="text-link"
                  >
                    <Badge
                      badgeContent={4}
                      color="success"
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <img className="svgInject" alt="Nest" src={carticon} />
                    </Badge>
                    <span>Warenkorb</span>
                  </Link>
                </div>
                <div className="header-action-icon">
                  <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    className="text-link"
                  >
                    <Badge
                      badgeContent={4}
                      color="success"
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <img className="svgInject" alt="Nest" src={hearticon} />
                    </Badge>
                    <span>Merkzettel</span>
                  </Link>
                </div>

                <div className="header-action-icon">
                  <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    className="text-link"
                  >
                    <img className="svgInject" alt="Nest" src={usericon} />
                    <span>Account</span>
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
                          <i className="fi fi-rs-user mr-10"></i>
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
                          <i className="fi fi-rs-location-alt mr-10"></i>
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
                          <i className="fi fi-rs-label mr-10"></i>
                          My Voucher
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
                          <i className="fi fi-rs-heart mr-10"></i>
                          My Wishlist
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
                          <i className="fi fi-rs-settings-sliders mr-10"></i>
                          Setting
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
                          <i className="fi fi-rs-sign-out mr-10"></i>
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
  
    </Container>
  );
};
