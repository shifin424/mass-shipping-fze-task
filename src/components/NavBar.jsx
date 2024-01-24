import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import Logo from "../assets/Images/logo.png";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleMenuItemClick = () => {
        setShowMenu(false);
    };

    return (
        <div className="bg-[#121d50] flex justify-between items-center h-[4rem] p-3 md:px-28">
            <div>
                <img className="w-15 h-10 pb-1" src={Logo} alt="logo" />
            </div>

            <div className="md:hidden ml-auto">
                <CgMenu className="text-white cursor-pointer" size={24} onClick={toggleMenu} />
            </div>

            <div className={`flex flex-col items-end ${showMenu ? "md:flex" : "hidden md:flex"}`}>
                <ul className="md:space-x-4 text-sm pt-2 font-poppins flex text-white">
                    <li className="text-[#3951ca] cursor-pointer hidden md:block" onClick={handleMenuItemClick}>
                        HOME
                    </li>
                    <li className="hover:text-[#3951ca] cursor-pointer hidden md:block" onClick={handleMenuItemClick}>
                        ABOUT US
                    </li>
                    <li className="hover:text-[#3951ca] cursor-pointer hidden md:block" onClick={handleMenuItemClick}>
                        SERVICES
                    </li>
                    <li className="hover:text-[#3951ca] cursor-pointer hidden md:block" onClick={handleMenuItemClick}>
                        GALLERY
                    </li>
                    <li className="hover:text-[#3951ca] cursor-pointer hidden md:block" onClick={handleMenuItemClick}>
                        CONTACT US
                    </li>
                </ul>

                <ul
                    className={`md:hidden absolute bg-white font-poppins text-sm text-[#121d50] w-40 rounded-md py-2 mt-2 shadow-md ${
                        showMenu ? "block" : "hidden"
                    }`}
                >
                    <li className="px-4 py-2 hover:bg-blue-200" onClick={handleMenuItemClick}>
                        HOME
                    </li>
                    <li className="px-4 py-2 hover:bg-blue-200" onClick={handleMenuItemClick}>
                        ABOUT US
                    </li>
                    <li className="px-4 py-2 hover:bg-blue-200" onClick={handleMenuItemClick}>
                        SERVICES
                    </li>
                    <li className="px-4 py-2 hover:bg-blue-200" onClick={handleMenuItemClick}>
                        GALLERY
                    </li>
                    <li className="px-4 py-2 hover:bg-blue-200" onClick={handleMenuItemClick}>
                        CONTACT US
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
