import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import Logo from "../assets/Images/logo.png";
import useClickOutside from "../hooks/useClickOutside";
import { Link } from "react-scroll";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const clickOutsideRef = useClickOutside(() => {
        setShowMenu(false);
    });

    return (
        <div className="bg-[#121d50] sticky top-0 w-full z-50 flex justify-between items-center h-[4rem] p-3 md:px-28">
            <div>
                <img className="w-15 h-10 pb-1" src={Logo} alt="logo" />
            </div>

            <div ref={clickOutsideRef} className="md:hidden ml-auto">
                <CgMenu className="text-white cursor-pointer" size={24} onClick={toggleMenu} />
            </div>

            <div className={`flex flex-col items-end ${showMenu ? "md:flex" : "hidden md:flex"}`}>
                <ul className="md:space-x-4 text-sm pt-2 font-poppins flex text-white">
                    <Link to="banner" spy={true} smooth={true} duration={800} offset={-70}>
                        <li className="text-[#3951ca] cursor-pointer hidden md:block">HOME</li>
                    </Link>
                    <Link to="about" spy={true} smooth={true} duration={800} offset={-70}>
                        <li className="text-white hover:text-[#3951ca] cursor-pointer hidden md:block">ABOUT US</li>
                    </Link>
                    <Link to="services" spy={true} smooth={true} duration={800} offset={-110}>
                        <li className="text-white  hover:text-[#3951ca] cursor-pointer hidden md:block">SERVICES</li>
                    </Link>
                    <Link to="gallery" spy={true} smooth={true} duration={800} offset={-70}>
                        <li className="text-white  hover:text-[#3951ca] cursor-pointer hidden md:block">GALLERY</li>
                    </Link>
                    <Link to="contactUs" spy={true} smooth={true} duration={800} offset={-70}>
                        <li className="text-white hover:text-[#3951ca] cursor-pointer hidden md:block">CONTACT US</li>
                    </Link>
                </ul>

                <div
                    className={`md:hidden absolute bg-white font-poppins text-sm text-[#121d50] w-40 rounded-md py-2 mt-2 shadow-md ${showMenu ? "block" : "hidden"
                        }`}
                >
                    <ul>
                        <Link to="banner" spy={true} smooth={true} duration={800} offset={-70}>
                            <li className="px-4 py-2 hover:bg-blue-200">HOME</li>
                        </Link>
                        <Link to="about" spy={true} smooth={true} duration={800} offset={-70}>
                            <li className="px-4 py-2 hover:bg-blue-200">ABOUT US</li>
                        </Link>
                        <Link to="services" spy={true} smooth={true} duration={800} offset={-110}>
                            <li className="px-4 py-2 hover:bg-blue-200">SERVICES</li>
                        </Link>
                        <Link to="gallery" spy={true} smooth={true} duration={800} offset={-70}>
                            <li className="px-4 py-2 hover:bg-blue-200">GALLERY</li>
                        </Link>
                        <Link to="contactUs" spy={true} smooth={true} duration={800} offset={-60}>
                            <li className="px-4 py-2 hover:bg-blue-200">CONTACT US</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
