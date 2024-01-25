import { BsBoxSeam } from "react-icons/bs";

const Services = () => {
    return (
        <div id='about' className="bg-[#edf0f3] w-full px-10 md:px-10 lg:px-28 py-10 md:py-16">
            <div className="flex flex-col gap-y-5 items-center">
                <p className="text-[#305fbe] font-semibold font-poppins text-center text-sm md:text-xl">
                    ABOUT US
                </p>
                <h1 className="text-[#121d50] text-lg text-center md:text-xl lg:text-4xl font-mono font-bold">
                    EFFICIENT AND RELIABLE SHIPPING <br />
                    WITH FASTGO
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10 gap-5">
                <div
                    className="bg-white p-8 rounded-md flex flex-col justify-evenly h-60 hover:bg-[#121d50] text-[#121d50] hover:text-white"
                >
                    <div className="w-16 flex justify-center pt-2 rounded-md bg-[#1195d6] h-16">
                        <BsBoxSeam className="w-8 text-white mt-1 h-9" />
                    </div>
                    <h1 className="font-mono font-bold ">OCEAN SHIPPING</h1>
                    <p className="text-sm">
                        we believe in providing our clients with <br />
                        personalized and efficient logistics <br />
                        solutions that meet their unique needs.
                    </p>
                </div>

                <div
                    className="bg-white p-8 rounded-md flex flex-col justify-evenly h-60 hover:bg-[#121d50] text-[#121d50] hover:text-white"
                >
                    <div className="w-16 flex justify-center pt-2 rounded-md bg-[#1195d6] h-16">
                        <BsBoxSeam className="w-8 text-white mt-1 h-9" />
                    </div>
                    <h1 className="font-mono font-bold ">AIR SHIPPING</h1>
                    <p className="text-sm">
                        we believe in providing our clients with <br />
                        personalized and efficient logistics <br />
                        solutions that meet their unique needs.
                    </p>
                </div>
                <div
                    className="bg-white p-8 rounded-md flex flex-col justify-evenly h-60 hover:bg-[#121d50] text-[#121d50] hover:text-white"
                >
                    <div className="w-16 flex justify-center pt-2 rounded-md bg-[#1195d6] h-16">
                        <BsBoxSeam className="w-8  text-white mt-1 h-9" />
                    </div>
                    <h1 className="font-mono font-bold ">TRUCK SHIPPING</h1>
                    <p className="text-sm">
                        we believe in providing our clients with <br />
                        personalized and efficient logistics <br />
                        solutions that meet their unique needs.
                    </p>
                </div>

                <div
                    className="bg-white p-8 rounded-md flex flex-col justify-evenly h-60 hover:bg-[#121d50] text-[#121d50] hover:text-white"
                >
                    <div className="w-16 flex justify-center pt-2 rounded-md bg-[#1195d6] h-16">
                        <BsBoxSeam className="w-8 text-white  mt-1 h-9" />
                    </div>
                    <h1 className="font-mono font-bold ">CUSTOM CLEARENCE</h1>
                    <p className="text-sm">
                        we believe in providing our clients with <br />
                        personalized and efficient logistics <br />
                        solutions that meet their unique needs.
                    </p>
                </div>

                <div
                    className="bg-white p-8 rounded-md flex flex-col justify-evenly h-60 hover:bg-[#121d50] text-[#121d50] hover:text-white"
                >
                    <div className="w-16 flex justify-center pt-2 rounded-md bg-[#1195d6] h-16">
                        <BsBoxSeam className="w-8 text-white mt-1 h-9" />
                    </div>
                    <h1 className="font-mono font-bold ">FREIGHT FORWARDING</h1>
                    <p className="text-sm">
                        we believe in providing our clients with <br />
                        personalized and efficient logistics <br />
                        solutions that meet their unique needs.
                    </p>
                </div>

                <div
                    className="bg-white p-8 rounded-md flex flex-col justify-evenly h-60 hover:bg-[#121d50] text-[#121d50] hover:text-white"
                >
                    <div className="w-16 flex justify-center pt-2 rounded-md bg-[#1195d6] h-16">
                        <BsBoxSeam className="w-8 text-white mt-1 h-9" />
                    </div>
                    <h1 className="font-mono font-bold ">INSURANCE</h1>
                    <p className="text-sm">
                        we believe in providing our clients with <br />
                        personalized and efficient logistics <br />
                        solutions that meet their unique needs.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default Services;
