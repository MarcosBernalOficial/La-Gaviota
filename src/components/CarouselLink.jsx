import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

const Carousel = ({ slides }) => {
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
            className="w-full h-60 md:h-80 overflow-hidden"
        >
            {slides.map((slide, index) => {
                const SlideContent = (
                    <div className="relative w-full h-full cursor-pointer">
                        <img
                            src={slide.src}
                            alt={slide.title || `Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 w-full bg-black/60 py-4 px-6">
                            <h2 className="text-white text-xl md:text-3xl font-menu text-center">
                                {slide.title}
                            </h2>
                        </div>
                    </div>
                );

                return (
                    <SwiperSlide key={index}>
                        {slide.to ? (
                            <Link to={slide.to} className="block w-full h-full">
                                {SlideContent}
                            </Link>
                        ) : (
                            SlideContent
                        )}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Carousel;
