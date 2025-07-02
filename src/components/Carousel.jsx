import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Carousel = ({ images }) => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={2000} // 👈 transición entre fotos dura 1 segundo
            autoplay={{
                delay: 4000, // 👈 cada slide se muestra 2 segundos
                disableOnInteraction: false,
            }}
            className="w-full h-60 md:h-80 overflow-hidden"
        >
            {images.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={imgSrc}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
