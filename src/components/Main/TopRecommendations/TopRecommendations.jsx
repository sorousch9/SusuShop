import "./topRecommendations.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import { Autoplay, Navigation } from "swiper";
import { products } from "../../../data";
import "swiper/scss/navigation";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../../requestMethod";

export const TopRecommendations = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products");
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
  var productOnSale =  products.filter((products)=> {
    return products.onSale === "false";
  });
  return (
    <div>
      <Swiper
        autoplay={{
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        navigation
        breakpoints={{
          380: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          769: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {productOnSale.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="carausel-Top-Rec">
              <Link to={item.id}>
                <img src={item.img} alt="product" />
                <h4>{item.title}</h4>
                <span>
                  <p>Preis</p>
                  {item.price}€
                </span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
