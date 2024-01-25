import { IoStar } from "react-icons/io5";
import client from "../assets/Images/client.png";
import { ImQuotesLeft } from "react-icons/im";

const Testimonial = () => {
    return (
        <div className="relative bg-[#edf0f3] h-auto pb-14 pt-20 px-10 md:px-10 lg:px-20 xl:px-32 2xl:px-48">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-10 md:gap-12 mx-auto">
                <div className="p-2 relative">
                    <div>
                        <p className="text-[#305fbe] font-semibold font-poppins text-sm md:text-base mb-2">TESTIMONIALS</p>
                        <h1 className="text-[#121d50] gap-x-4 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-mono font-bold mb-4">
                            OUR CLIENTS SPEAK <br />
                            FOR US
                        </h1>
                    </div>

                    <div className="mt-8 relative">
                        <img src={client} alt="" className="w-full h-[22rem] rounded-md object-cover" />
                        <div className="absolute top-[-3rem] right-[-2rem] p-4 bg-[#1195d6] rounded-md flex justify-center md:w-24 md:h-24 text-[#090e23]">
                            <ImQuotesLeft className="w-12 h-12 text-white" />
                        </div>
                    </div>

                    <div className="bg-[#090e23] p-5 space-y-7 flex flex-col justify-around  rounded-md mt-8 md:w-full max-w-[28rem]">
                        <div className="flex">
                            <IoStar className="text-[#1195d6] mr-1" />
                            <IoStar className="text-[#1195d6] mr-1" />
                            <IoStar className="text-[#1195d6] mr-1" />
                            <IoStar className="text-[#1195d6] mr-1" />
                            <IoStar className="text-[#1195d6] mr-1" />
                        </div>
                        <p className="text-white text-md  mb-4">
                            I have been using FastGo cargo logistics & transportation service for over a year now, and I am
                            extremely satisfied with their service. They are efficient, reliable, and always deliver on
                            time. I highly recommend them to anyone in need of logistics services.
                        </p>
                        <h1 className="font-Teko text-white text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-4">
                            JOHN DOE, BUSINESS OWNER
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col space-y-8  items-end">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-white  p-3  flex md:mt-10 flex-col justify-around rounded-md md:w-full max-w-[28rem]"
                        >
                            <div className="flex mb-2">
                                <IoStar className="text-[#1195d6] mr-1" />
                                <IoStar className="text-[#1195d6] mr-1" />
                                <IoStar className="text-[#1195d6] mr-1" />
                                <IoStar className="text-[#1195d6] mr-1" />
                                <IoStar className="text-[#1195d6] mr-1" />
                            </div>
                            <p className="text-[#090e23] text-md mb-4">
                                I have been using FastGo cargo logistics & transportation service for over a year now, and I
                                am extremely satisfied with their service. They are efficient, reliable, and always deliver
                                on time. I highly recommend them to anyone in need of logistics services.
                            </p>
                            <h1 className="font-Teko text-[#090e23] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-4">
                                JOHN DOE, BUSINESS OWNER
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
