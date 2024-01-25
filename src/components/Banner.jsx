import React from "react";
import BackgroundImage from "../assets/Images/banner-background.png";
import Profile from "../assets/Images/profile.png";

const Banner = () => {
    return (
        <div id="banner"
            className="bg-cover bg-no-repeat bg-center p-3 px-4  md:px-28 h-[35rem]"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="flex flex-col justify-around mt-8 h-60">
                <p className="text-white text-sm md:text-base lg:text-lg">
                    WE ARE THE BEST LOGISTIC COMPANY
                </p>
                <h1 className="text-white text-2xl md:text-5xl font-sans font-bold">
                    STREAMLINE YOUR SHIPPING WITH <br/> OUR CARGO SERVICES
                </h1>
                <p className="text-white text-xs md:text-sm lg:text-base">
                    Simplify your shipping process and make it more efficient with our <br />
                    cargo services. From start to finish, we'll handle everything to ensure your cargo arrives safely.
                </p>
            </div>

            <div className="flex">
                <img src={Profile} className="w-24 h-24 mt-5 rounded-md" alt="" />
                <div className="ml-5 border-r mt-10 pr-3 h-14 border-dashed">
                    <h1 className="text-2xl text-white font-bold">26 K</h1>
                    <h1 className="text-white text-sm">Satisfied Clients</h1>
                </div>
                <div className="ml-5 mt-10">
                    <h1 className="text-2xl text-white font-poppins font-bold">12 +</h1>
                    <p className="text-white text-sm">Years of Experience</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
