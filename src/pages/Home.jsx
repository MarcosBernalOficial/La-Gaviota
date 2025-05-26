
import React from 'react';
import VideoSection from '../components/VideoSection';
import Carousel from '../components/CarouselCard';
import Gallery from '../components/Gallery';

import video1 from '../assets/videos/Nosotros.mp4';
import video2 from '../assets/videos/petFriendly.mp4';
import video3 from '../assets/videos/Terraza.mp4';
import video4 from '../assets/videos/Ustedes.mp4';

export default function Home() {
    return (
        <div className="w-full">
        {/* Carousel de card links */}
        <Carousel />
        
        <VideoSection videoSrc={video1} showButton={false} fullScreen={false} />
        <VideoSection videoSrc={video2} showButton={false} fullScreen={false} />
        <VideoSection videoSrc={video3} showButton={false} fullScreen={false} />
        <VideoSection videoSrc={video4} showButton={false} fullScreen={false} />
        </div>
    );
}
