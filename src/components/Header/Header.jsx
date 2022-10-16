import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import { Col, Container, Row } from "react-bootstrap";
import { Badge } from "@mui/material";
import { BsSearch, BsCardChecklist, BsCheck2Square } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { IoBusinessSharp } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { VscSignOut, VscHeart } from "react-icons/vsc";
export const Header = () => {
  return (
    <Container>
      <Row>
        <div className="header">
          <Col xs="4" sm="2" xl="2">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="beuroMarkt AG" />
              </a>
            </div>
          </Col>
          <Col xs="8" sm="6" xl="5">
            <div className="header-center">
              <div className="search-style">
                <form>
                  <select className="select-active" defaultValue="Alle Kategorien">
                    <option>Alle Kategorien</option>
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
                    <input type="text" placeholder="Suche" />
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="4" xl="5">
            <div>
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
                        style={{ fontSize: "1.6rem", marginRight: "0.5rem" }}
                      />
                    </Badge>
                    <span className="herder-span">Warenkorb</span>
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
                        style={{ fontSize: "1.6rem", marginRight: "0.5rem" }}
                      />
                    </Badge>

                    <span className="herder-span">Einkaufslisten</span>
                  </Link>
                </div>
                <div className="header-action-icon">
                  <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    className="text-link"
                  >
                    <AiOutlineUser
                      style={{ fontSize: "1.7rem", marginRight: "0.5rem" }}
                    />
                    <span className="herder-span">Account</span>
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
                <div className="header-action-icon">
                  <Link
                    to="/"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    className="text-link"
                  >
                    <IoBusinessSharp
                      style={{ fontSize: "1.6rem", marginRight: "0.5rem" }}
                    />
                    <span className="bus-span">Geschäftskundenshop</span>
                    <p>
                      Geschäfts<br></br>kundenshop
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};
