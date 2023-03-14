import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import { Autoplay, Navigation } from "swiper";
import "swiper/scss/navigation";
import { Link } from "react-router-dom";
import { Props } from "../../../interfaces/Products";
import { Card } from "react-bootstrap";

export const TopRecommendations = ({ products }: Props) => {
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
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {products?.map((item) => (
          <SwiperSlide key={item.id}>
            <Card className="carausel-Top-Rec">
              <Link to={`/products/${item.id}`}>
                <div className="cart-image">
                  <Card.Img src={item.img[0].src} />
                </div>
                <h6>{item.title}</h6>
                <div className="carausel-price">
                  <p>Preis : </p>
                  <span>{item.price}€</span>
                </div>
              </Link>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
