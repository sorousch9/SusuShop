import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import Product from "./pages/Product";
import { ProductList } from "./pages/ProductList";
import { ScrollToTop } from "./components/ScrollTop";

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
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
