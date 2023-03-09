import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import Product from "./pages/Product";
import { ProductList } from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
