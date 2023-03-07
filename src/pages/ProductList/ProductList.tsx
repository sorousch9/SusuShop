import { Anons } from "../../components/Anons/Anons";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import "./productList.scss";
import { Products } from "../../components/Products/Products";
import { Link } from "react-router-dom";

export const ProductList = () => {
  return (
    <div>
      <Anons />
      <Header />
      <div className="filterContainer">
        <div className="breadcrumb">
          <nav className="">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <span />
                <Link to={"/products"}>Shop</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Products />
      </div>
      <Footer />
    </div>
  );
};
