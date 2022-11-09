import "./topRecommendations.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import { Autoplay, Navigation } from "swiper";
import "swiper/scss/navigation";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../../requestMethod";

export const TopRecommendations = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products");
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [product._id]);
  const topProduct = product 
  var productOnSale = topProduct.filter && topProduct.filter((item)=> {
    return item.onSale === "false";
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
        {productOnSale?.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="carausel-Top-Rec">
              <Link to={`/product/${item._id}`}>
                <img src={item.img[0].src} alt={item.title} />
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
