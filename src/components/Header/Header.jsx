import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import { Col, Container, Row } from "react-bootstrap";
import { Badge } from "@mui/material";
import { BsSearch, BsCardChecklist } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { IoBusinessSharp } from "react-icons/io5";
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
        <Col md="5">
          <div className="header-right">
            <div className="search-style">
              <form>
                <select className="select-active">
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
                <div className="input-item">
                  <i>
                    <BsSearch />
                  </i>
                  <input type="text" placeholder="Wonach suchen Sie ?" />
                </div>
              </form>
            </div>
          </div>
        </Col>
        <Col md="3">
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
                    <AiOutlineShoppingCart
                      style={{ fontSize: "1.3rem", marginRight: "5px" }}
                    />
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
                    <BsCardChecklist
                      style={{ fontSize: "1.3rem", marginRight: "5px" }}
                    />
                  </Badge>

                  <span>Einkaufslisten</span>
                </Link>
              </div>
              <div className="header-action-icon">
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  className="text-link"
                >
                  <AiOutlineUser
                    style={{ fontSize: "1.3rem", marginRight: "5px" }}
                  />
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
        </Col>
        <Col md="2">
          <div className="hotline">
            <IoBusinessSharp style={{ fontSize: "2.4rem",color:"#474747",marginRight:"5px" }} />
            <p>
            Geschäftskundenshop<span>Alle Preise werden dann<br></br> zzgl. MwSt. angezeigt.</span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
