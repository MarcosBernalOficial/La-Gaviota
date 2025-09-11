const Video = ({ videoSrc, poster }) => {
    return (
        <div className="w-full h-60 md:h-80 overflow-hidden flex items-center justify-center bg-black">
            <video
                src={videoSrc}
                poster={poster}
                preload="none"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
            />
        </div>
    );
};

export default Video;
