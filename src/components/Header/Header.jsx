import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import { Badge } from "@mui/material";
import { BsSearch, BsCheck2Square } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

import { GoLocation } from "react-icons/go";
import { VscSignOut, VscHeart } from "react-icons/vsc";
import { categories } from "../../data";
export const Header = () => {
  return (
    <div className="header-main">
      <div className="container">
        <div className="left">
          <div className="logo">
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <img src={logo} alt="beuroMarkt AG" />
              <span>die Nr. 1 für B2B Kunden mit günstigen Preisen</span>
            </Link>
          </div>
        </div>
        <div className="center">
          <div className="search-style">
            <form>
              <select className="select-active" defaultValue="Alle Kategorien">
                {categories.map((item) => (
                  <option key={item.id}>{item.title}</option>
                ))}
              </select>
              <div className="input-item">
                
                <input type="text" placeholder="Suche" />
                <i>
                  <BsSearch />
                </i>
              </div>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="header-action">
            <div className="header-action-icon">
              <Link
                to="/cart"
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
                  <span className="corb"></span>
                </Badge>
                <span className="herder-span ">11.95 €</span>
                <span className="herder-span price-details">inkl. MwSt.</span>
              </Link>
            </div>
            <div className="header-action-icon wishlist">
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
                  <span className="wishlist"></span>
                </Badge>

                <span className="herder-span">Einkaufslisten</span>
              </Link>
            </div>
            <div className="header-action-icon account">
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
                className="text-link"
              >
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
          </div>
        </div>
      </div>
    </div>
  );
};
