// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import image1 from "../assets/images/carousel1.jpg";
import image2 from "../assets/images/carousel2.jpg";
import image3 from "../assets/images/carousel3.jpg";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

// Array of images and corresponding text
const slides = [
  { image: image1, text: "Welcome to Our Platform" },
  { image: image2, text: "Find Your Dream Job" },
  { image: image3, text: "Connect with Experts" },
];

export default function Carousel() {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide image={slide.image} text={slide.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
