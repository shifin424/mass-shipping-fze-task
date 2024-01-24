import React from "react";
import Button from "./Button";
import profile from '../assets/Images/about.png';

const About = () => {
    return (
        <div className="relative px-10 lg:px-28 mt-10 md:mt-20 mb-20 flex flex-col md:flex-row">
            <div className="flex flex-col justify-between md:w-1/2 md:pr-6 gap-y-6 relative z-10">
                <p className="text-[#305fbe] font-semibold font-poppins text-sm md:text-xl">
                    ABOUT US
                </p>
                <h1 className="text-[#121d50] gap-x-4 text-lg md:text-xl lg:text-4xl font-mono font-bold">
                    EMPOWERING YOUR <br /> BUSINESS WITH TAILORED <br />LOGISTICS SOLUTIONS
                </h1>
                <p className="text-xs md:text-sm lg:text-base">
                    We believe in providing our clients with personalized and efficient <br />
                    logistics solutions that meet their unique needs. With years of <br />
                    experience and a team of experts, we are dedicated to empowering your <br />
                    business with seamless shipping experiences.
                </p>

                <Button className="px-4 py-1 rounded  text-white mb-5 md:mb-3 bg-[#1195d6]" label="LEARN MORE" />
            </div>
            <div className="md:w-[41rem] h-[25rem] relative z-0">
                <img src={profile} alt="" className="w-full h-auto md:max-w-full md:h-full absolute rounded-md" />
                <div className="absolute top-0 left-0 w-28 md:w-56 mt-20 md:mt-32 ml-10 md:ml-20 h-32 md:h-56 rounded bg-white z-10"></div>
                <div className="absolute w-14 md:w-20 h-14 md:h-20 bg-[#1195d6] rounded-full mt-12 ml-12 md:mt-[6rem] md:ml-24  z-10"></div>
            </div>
            
        </div>
    );
};

export default About;
