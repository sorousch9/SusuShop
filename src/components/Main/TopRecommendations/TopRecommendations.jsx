import "./topRecommendations.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay"
import { Pagination } from "swiper";
import { products } from "../../../data";


export const TopRecommendations = () => {
  return (
    <div> <Swiper
    autoplay={true}
    slidesPerView={1}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    {products.map((item)=>(
    <SwiperSlide key={item.id}>
      <div className="carausel-Top-Rec">
        <img src={item.img} alt="product"/>
        <h4>{item.title}</h4>
        <span><p>Price ab</p>{item.price}€</span>
      </div>
    </SwiperSlide>))}
  </Swiper></div>
  )
}
