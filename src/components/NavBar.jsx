import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import Logo from "../assets/Images/logo.png";
import useClickOutside from "../hooks/useClickOutside";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleMenuItemClick = () => {
        setShowMenu(false);
    };

    const clickOutsideRef = useClickOutside(() => {
        console.log("hello iam comming..");
        setShowMenu(false);;
    });

    return (
        <div className="bg-[#121d50] flex justify-between items-center h-[4rem] p-3 md:px-28">
            <div>
                <img className="w-15 h-10 pb-1" src={Logo} alt="logo" />
            </div>

            <div  ref={clickOutsideRef} className="md:hidden ml-auto">
                <CgMenu className="text-white cursor-pointer" size={24} onClick={toggleMenu} />
            </div>

            <div className={`flex flex-col items-end ${showMenu ? "md:flex" : "hidden md:flex"}`}>
                <ul className="md:space-x-4 text-sm pt-2 font-poppins flex text-white">
                    <li className="text-[#3951ca] cursor-pointer hidden md:block">HOME</li>
                    <li className="hover:text-[#3951ca] cursor-pointer hidden md:block">ABOUT US</li>
                    <li className="hover:text-[#3951ca] cursor-pointer hidden md:block">SERVICES</li>
                    <li className="hover:text-[#3951ca] cursor-pointer hidden md:block">GALLERY</li>
                    <li className="hover:text-[#3951ca] cursor-pointer hidden md:block">CONTACT US</li>
                </ul>

                <div  className={`md:hidden absolute bg-white font-poppins text-sm text-[#121d50] w-40 rounded-md py-2 mt-2 shadow-md ${
                            showMenu ? "block" : "hidden"
                        }`} >
                    <ul
                       
                       
                    >
                        <li className="px-4 py-2 hover:bg-blue-200">HOME</li>
                        <li className="px-4 py-2 hover:bg-blue-200">ABOUT US</li>
                        <li className="px-4 py-2 hover:bg-blue-200">SERVICES</li>
                        <li className="px-4 py-2 hover:bg-blue-200">GALLERY</li>
                        <li className="px-4 py-2 hover:bg-blue-200">CONTACT US</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
