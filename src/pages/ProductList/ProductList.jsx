import { Anons } from "../../components/Anons/Anons";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import "./productList.scss";
import { useState } from "react";
import { Products } from "../../components/Products/Products";
import { Link, useLocation } from "react-router-dom";

export const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);
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
            <select name="category" aria-label="State" onChange={handleFilters}>
              <option value="all">Alle</option>
              <option>Werkzeug & Baumarkt</option>
              <option>Akku-Bohrschrauber</option>
              <option>Bürobedarf</option>
              <option>Etikettendrucker</option>
              <option>Schreiben</option>
              <option>Stühle</option>
              <option>Multifunktionsgerät</option>
              <option>Elektronik</option>
              <option>Computer</option>
              <option>Hängeordner</option>
              <option>Papiere & Etiketten</option>
              <option>Tablet</option>
              <option>Rollcontainer</option>
              <option>Koffer</option>
              <option>Rucksäcke</option>
              <option>Büromöbel</option>
              <option>Stahlschränke</option>
              <option>Taschenmesser</option>
              <option>Freizeit</option>
              <option>Tinte</option>
              <option>Druckerpatronen</option>
              <option>Haushalt</option>
              <option>Küche</option>
              <option>Stabmixer</option>
            </select>
            <h4 className="pro-sidebar-title">Marke:</h4>
            <label htmlFor="state"></label>
            <select name="brand" onChange={handleFilters}>
              <option value={filters}>Alle Marke</option>
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
          </div>
        </div>
        <Products filters={filters} cat={cat} />
      </div>
      <Footer />
    </div>
  );
};
