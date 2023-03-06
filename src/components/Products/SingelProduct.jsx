import "./singelProduct.scss";
import { BsArrowsFullscreen, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addProduct,
  getCartCount,
  getSubTotal,
  getTotalAmount,
} from "../../redux/cartRedux";

export const SingelProduct = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(addProduct({ ...product }));
    dispatch(getCartCount());
    dispatch(getSubTotal());
    dispatch(getTotalAmount());
  };
  return (
    <div className="list-product-wrapper product-type-3">
      <div className="list-thumbnail-wrapper">
        <div className="product-badges">
          <span className={item.sale > 0 ? "badge style-1 onsale" : ""}>
            {item.sale}%
          </span>
          <span className={item.available}></span>
        </div>
        <Link
            to={`http://localhost:5000/product/${item.id}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <img src={item.img[0].src} alt="sas" />
        </Link>
        <div className="product-buttons">
          <Link
            to={`/product/${item._id}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <BsArrowsFullscreen
              style={{
                color: "inherit",
                textDecoration: "inherit",
              }}
            />
          </Link>

          <Link
            to="/"
            className="detail-bnt quick-view-button"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <BsHeart />
          </Link>
        </div>
      </div>
      <div className="list-content-wrapper">
        <span className="price">
          <del aria-hidden="true">
            <span className="amount">
              <bdi>{item.price}€</bdi>
            </span>
          </del>{" "}
          <ins>
            <span className="amount">
              <bdi>
                <span>
                  {parseFloat(
                    item.price - (item.price * item.sale) / 100
                  ).toFixed(2)}
                  €
                </span>
                {item.saleprice}
              </bdi>
            </span>
          </ins>
        </span>
        <h3 className="list-product-title">
          <Link
              to={`http://localhost:5000/product/${item.id}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
            title="testing product"
          >
            {item.title}
          </Link>
        </h3>
        <div className="product-meta">
          <div className="product-available in-stock">AUF LAGER</div>
        </div>
        <div className="product-rating">
          <div
            className="star-rating"
            role="img"
            aria-label="Rated 5.00 out of 5"
          >
            <span style={{ width: "100%" }}></span>
          </div>
          <div className="count-rating">
            58 <span className="rating-text">Ratings</span>
          </div>
        </div>
        <button
          className="list-product-btn-fade"
          onClick={() => {
            addToCart(item);
          }}
        >
          In den Warenkorb
        </button>
      </div>
    </div>
  );
};
