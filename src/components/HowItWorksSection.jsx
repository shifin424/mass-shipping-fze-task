import Service from "../assets/Images/service.png";
import Button from "./Button";
import { BsBoxSeam } from "react-icons/bs";

const HowItWorksSection = () => {
    return (
        <div>
            <div className="relative px-10 md:px-28 mt-10 md:mb-20 md:mt-20 flex flex-col md:flex-row">
                <div className="md:w-[41rem] h-[18rem] md:h-[25rem]  z-0">
                    <img src={Service} alt="" className="w-full h-auto md:max-w-full md:h-full  rounded-md" />
                </div>
                <div className="flex flex-col justify-between md:w-1/2  md:pl-20 gap-y-6 mb-2">
                    <p className="text-[#305fbe] font-semibold font-poppins text-sm md:text-xl">HOW IT WORKS</p>
                    <h1 className="text-[#121d50]  text-lg md:text-xl lg:text-4xl font-mono font-bold">
                        SIMPLIFY YOUR SHIPPING <br /> EXPERIENCE WITH OUR <br />
                        EASY STEP PROCESS
                    </h1>
                    <p className="text-xs md:text-sm lg:text-base">
                        We believe in providing our clients with personalized and efficient <br />
                        logistics solutions that meet their unique needs. With years of <br />
                        experience and a team of experts, we are dedicated to empowering your <br />
                        business with seamless shipping experiences.
                    </p>
                    <Button className="px-4 py-1 rounded  text-white mb-5 md:mb-3 bg-[#1195d6]" label="LEARN MORE" />
                </div>
            </div>
            <div className="border-t border-dashed border-black mx-10 md:mx-28">
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-8 mx-10 md:mx-28  my-16">
                <div className="h-auto md:h-[20rem] bg-[#ddecff] md:bg-white flex items-center flex-col justify-center rounded-md p-6">
                    <span className="w-16 text-center mb-3 h-7 border font-sans   border-gray-800 rounded-full">step 1</span>
                    <div className="w-16 flex justify-center pt-2 rounded-md bg-[#1195d6] h-16">
                        <BsBoxSeam className="w-8 text-white mt-2 h-7" />
                    </div>
                    <h1 className="text-[#121d50] text-lg md:text-xl lg:text-4xl font-mono font-bold mt-4">
                        REQUEST A QUOTE
                    </h1>
                    <p className="text-xs text-center md:text-sm lg:text-base mt-4">
                        We believe in providing our clients with <br/> personalized and efficient 
                        logistics <br /> solutions that meet their unique needs.
                    </p>
                </div>
                <div className=" h-auto  md:h-[20rem] bg-[#ddecff] md:bg-white flex items-center flex-col justify-center rounded-md p-6">
                    <span className="w-16 text-center mb-3 h-7 border font-sans    border-gray-800 rounded-full">step 2</span>
                    <div className="w-16 flex justify-center pt-2 rounded-md bg-[#1195d6] h-16">
                        <BsBoxSeam className="w-8 text-white mt-2 h-7" />
                    </div>
                    <h1 className="text-[#121d50] text-lg md:text-xl lg:text-4xl font-mono font-bold mt-4">
                        PROVIDE DETAILS
                    </h1>
                    <p className="text-xs text-center md:text-sm lg:text-base mt-4">
                        We believe in providing our clients with <br/> personalized and efficient 
                        logistics <br /> solutions that meet their unique needs.
                    </p>
                </div>

                <div className="h-auto md:h-[20rem] bg-[#ddecff] md:bg-white flex items-center flex-col justify-center rounded-md p-6">
                    <span className="w-16 text-center mb-3 h-7 border font-sans   border-gray-800 rounded-full">step 3</span>
                    <div className="w-16 flex justify-center pt-2 rounded-md bg-[#1195d6] h-16">
                        <BsBoxSeam className="w-8 text-white mt-2 h-7" />
                    </div>
                    <h1 className="text-[#121d50] text-lg md:text-xl lg:text-4xl font-mono font-bold mt-4">
                       SCHEDULE PICK-UP
                    </h1>
                    <p className="text-xs text-center md:text-sm lg:text-base mt-4">
                        We believe in providing our clients with <br/> personalized and efficient 
                        logistics <br /> solutions that meet their unique needs.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default HowItWorksSection;
