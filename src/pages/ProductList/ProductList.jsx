import { Anons } from "../../components/Anons/Anons";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import "./productList.scss";
import { useState } from "react";
import { Products } from "../../components/Products/Products";
import { Link, useLocation } from "react-router-dom";
import { categories } from "../../data";

export const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("neuheiten");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

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
                <Link to={"/products"}>
                  Shop {cat !== undefined ? <span /> : " "}
                </Link>
              </li>
              <li>
                <Link>{cat}</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="filterWrapper">
          <div className="categories-filter">
            <h4 className="pro-sidebar-title">Filter mit Kategorien:</h4>
            <label htmlFor="state"></label>
              <select
               
               name="category"
               aria-label="State"
               onChange={handleFilters}
               >
               {categories.map((item) => (
                <option  key={item.id}>{item.title}</option>
                ))}
              </select>
            <h4 className="pro-sidebar-title">Marke:</h4>
            <label htmlFor="state"></label>
            <select name="brand" onChange={handleFilters}>
              <option>DeWalt</option>
              <option>Bosch</option>
              <option>G&G</option>
              <option>Böttcher-AG</option>
              <option>Canon</option>
              <option>Elba</option>
              <option>Brother</option>
              <option>Apple</option>
              <option>FlexiSpot</option>
              <option>Wenger</option>
              <option>Burg-Wächter</option>
              <option>Victorinox</option>
              <option>Yealink</option>
              <option>Faber-Castell</option>
              <option>Hauptstadtkoffer</option>
            </select>
            <select onChange={(e) => setSort(e.target.value)}>
              <option value="neuheiten"> Neuheiten</option>
              <option value="prise-n">Preis : niedrigster zu erst</option>
              <option value="prise-h">Preis : höchster zu erst</option>
            </select>
          </div>
        </div>
        <Products filters={filters} cat={cat} sort={sort} />
      </div>
      <Footer />
    </div>
  );
};
