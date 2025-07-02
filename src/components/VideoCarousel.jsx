import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function VideoCarousel({ videos, fullScreen = false }) {
    const containerClasses = fullScreen
        ? "relative h-screen w-full overflow-hidden"
        : "relative w-full overflow-hidden";

    return (
        <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
            disableOnInteraction: false,
        }}
        className="w-full"
        >
        {videos.map((videoSrc, index) => (
            <SwiperSlide key={index}>
            <section className={containerClasses}>
                <video
                className="w-full max-w-xl h-auto mx-auto object-contain block"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                />
            </section>
            </SwiperSlide>
        ))}
        </Swiper>
    );
}
