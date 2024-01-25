import React from "react";
import Button from "./Button";
import profile from "../assets/Images/about.png";
import { LuAnchor } from "react-icons/lu";

const About = () => {
    return (
        <>
            <div className="relative px-10 lg:px-28 mt-10 md:mb-20 md:mt-20  flex flex-col md:flex-row">
                <div className="flex flex-col justify-between md:w-1/2 md:pr-6 gap-y-6 relative ">
                    <p className="text-[#305fbe] font-semibold font-poppins text-sm md:text-xl">ABOUT US</p>
                    <h1 className="text-[#121d50] gap-x-4 text-lg md:text-xl lg:text-4xl font-mono font-bold">
                        EMPOWERING YOUR <br /> BUSINESS WITH TAILORED <br />
                        LOGISTICS SOLUTIONS
                    </h1>
                    <p className="text-xs md:text-sm lg:text-base">
                        We believe in providing our clients with personalized and efficient <br />
                        logistics solutions that meet their unique needs. With years of <br />
                        experience and a team of experts, we are dedicated to empowering your <br />
                        business with seamless shipping experiences.
                    </p>

                    <Button className="px-4 py-1 rounded  text-white mb-5 md:mb-3 bg-[#1195d6]" label="LEARN MORE" />
                </div>
                <div className="md:w-[41rem] h-[21rem] md:h-[25rem] relative z-0">
                    <img src={profile} alt="" className="w-full h-auto md:max-w-full md:h-full absolute rounded-md" />
                    <div
                        className="absolute  w-28 md:w-56 mt-20 md:mt-32 pb-2  md:pb-5 md:gap-y-7 gap-y-1 text-sm text-center
                     ml-10 md:ml-20 h-32 md:h-56 rounded-md flex flex-col justify-end bg-white z-10"
                    >
                        <h1 className="text-2xl md:text-5xl text-[#121d50] font-bold ">647 +</h1>
                        <Button
                            className=" md:px-3 md:ml-4 md:mr-4  ml-2 mr-2 h-14 rounded-md text-white text-sm md:text-xl 
                             md:h-20 bg-[#0e33cb]  md:p-3 "
                            label="AWWARDS WINNING"
                        />
                    </div>
                    <div className="absolute w-12 md:w-20 h-12 md:h-20 bg-[#1195d6] rounded-full mt-14 ml-12 md:mt-[6rem] md:ml-24  z-10">
                        <LuAnchor className="md:ml-6 ml-4 mt-4 text-white md:w-8 md:mt-5 md:h-10" />
                    </div>
                </div>
            </div>
            <div className="md:flex flex-col md:flex-row md:justify-between text-2xl font-semibold bg-white px-10 md:px-28 pb-20">
                <div className="bg-[#090e23] rounded-md flex gap-x-6 justify-center p-5 w-full md:w-80 h-34 text-white mb-5 md:mb-0">
                    <h1 className="mb-2 border-r pr-4 border-dashed  pt-4 md:mb-0">01</h1>
                    <h1 className="text-left">
                        EXPERTISE AND
                        <br />
                        EXPERIENCE
                    </h1>
                </div>
                <div className="bg-[#090e23] rounded-md flex gap-x-6 justify-center p-5 w-full md:w-80 h-34 text-white mb-5 md:mb-0">
                    <h1 className="mb-2 border-r pr-4 border-dashed pt-4 md:mb-0">02</h1>
                    <h1 className="text-left">
                        COMMITED TO
                        <br />
                        QUALITY
                    </h1>
                </div>
                <div className="bg-[#090e23] rounded-md flex gap-x-6 justify-center p-5 w-full md:w-80 h-34 text-white">
                    <h1 className="mb-2 border-r pr-4 border-dashed pt-4 md:mb-0">03</h1>
                    <h1 className="text-left">
                        COMPREHENSIVE
                        <br />
                        SERVICES
                    </h1>
                </div>
            </div>
        </>
    );
};

export default About;
