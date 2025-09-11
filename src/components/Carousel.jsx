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
            speed={2000}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            className="w-full aspect-video overflow-hidden"
            >
            {images.map((imgSrc, index) => (
                <SwiperSlide key={index}>
                <img
                    src={imgSrc}
                    alt={`Slide ${index}`}
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover"
                />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
