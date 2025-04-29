import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Carousel = ({ images }) => {
    return (
        <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={false}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        onReachEnd={(swiper) => {
            swiper.autoplay.reverseDirection = true;
            swiper.autoplay.start();
        }}
        onReachBeginning={(swiper) => {
            swiper.autoplay.reverseDirection = false;
            swiper.autoplay.start();
        }}
        className="w-full h-60 md:h-80 rounded-2xl overflow-hidden"
        >
        {images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
            <img src={imgSrc} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            </SwiperSlide>
        ))}
        </Swiper>
    );
};

export default Carousel;
