import React, { useState } from "react";
import BackgroundImage from "../assets/Images/video-background.png";
import { FaPlay } from "react-icons/fa";
import videoPromo from '../assets/videos/dummy-video.mp4'

const VideoSection = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsVideoPlaying(true);
    };

    return (
        <div
            className="relative w-full bg-blue-500 flex flex-col justify-center items-center gap-y-10 h-[40rem]
             bg-cover mb-10 bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            {isVideoPlaying ? (
                <div className="w-full h-full flex items-center justify-center">
                    <video
                        autoPlay
                        controls
                        className="w-full h-full object-cover rounded"
                        poster={BackgroundImage}
                        onClick={() => setIsVideoPlaying(false)}
                    >
                        <source src={videoPromo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                <>
                    <h1 className="text-white text-4xl font-sans font-bold absolute top-36">
                        SEE IT IN ACTION
                    </h1>
                    <p className="text-white text-center px-10 absolute top-1/3 mb-20">
                        Watch Our Video to Get a Clear Understanding of How it Works
                    </p>
                    <div
                        className="w-20 h-20 flex bg-white justify-center items-center rounded-full cursor-pointer"
                        onClick={handlePlayClick}
                    >
                        <FaPlay className="w-5 text-[#1195d6] h-5" />
                    </div>
                </>
            )}
        </div>
    );
};

export default VideoSection;
