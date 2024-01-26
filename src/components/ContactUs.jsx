import { BsBoxSeam } from "react-icons/bs";
import InputField from "./InputField";
import Button from "./Button";

const ContactUs = () => {
    return (
        <div id="contactUs" className="flex flex-col md:flex-row bg-white p-5 md:pt-10 md:pb-10 md:px-28">
            <div className="md:flex-1 bg-white p-5 md:p-10">
                <div>
                    <p className="text-[#305fbe] font-semibold font-poppins text-sm md:text-xl">CONTACT US</p>
                    <h1 className="text-[#121d50] gap-x-4 text-lg md:text-xl mt-5 lg:text-4xl font-mono font-bold">
                        TAKE THE FIRST STEP <br /> TO STREAMLINED <br />
                        SHIPPING
                    </h1>
                </div>
                <div className="border-b border-black border-dashed flex mt-5 pb-5 pt-10 ">
                    <div className="bg-[#1195d6] rounded-md w-20 h-20 flex justify-center items-center">
                        <BsBoxSeam className="text-white w-10 h-10" />
                    </div>
                    <div className="ml-5">
                        <h4 className="font-poppins text-sm">Call US</h4>
                        <h1 className="font-bold text-black">+2 333 000-0000</h1>
                    </div>
                </div>
                <div className="border-b border-black border-dashed pb-5 flex mt-10 ">
                    <div className="bg-[#1195d6] rounded-md w-20 h-20 flex justify-center items-center">
                        <BsBoxSeam className="text-white w-10 h-10" />
                    </div>
                    <div>
                        <div className="ml-5">
                            <h4 className="font-poppins text-sm">Email</h4>
                            <h1 className="font-bold text-black">MASSSHIPPING@GMAIL.COM</h1>
                        </div>
                    </div>
                </div>
                <div className="flex mt-10 ">
                    <div className="bg-[#1195d6] rounded-md w-20 h-20 flex justify-center items-center">
                        <BsBoxSeam className="text-white w-10 h-10" />
                    </div>
                    <div className="ml-5">
                        <h4 className="font-poppins text-sm">Office</h4>
                        <h1 className="font-bold text-black">ANYWHERE STREET,NY</h1>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 white p-5">
                <div className="bg-gray-300 rounded-md p-5 md:p-10 h-auto">
                    <div>
                        <h1 className="text-[#121d50] gap-x-4 text-lg md:text-xl pt-7 lg:text-4xl font-mono font-bold">
                            REQUEST A QUOTE TODAY
                        </h1>
                    </div>
                    <div className="mt-5 flex flex-col gap-y-2">
                        <InputField
                            label="Your Name"
                            type="text"
                            placeholder="Ex: John Dee"
                            className="rounded-md w-full p-4"
                        />
                        <InputField
                            label="Email Address"
                            type="email"
                            placeholder="Ex: johndee@gmail.com"
                            className="rounded-md w-full p-4"
                        />
                        <InputField
                            label="Phone"
                            type="tel"
                            placeholder="Ex: +1 (333) 000-0000"
                            className="rounded-md w-full p-4"
                        />
                        <InputField
                            label="Message"
                            type="textarea"
                            placeholder="Write your message here"
                            className="rounded-md w-full p-4"
                        />
                        <div>
                            <Button
                                className="bg-[#1195d6] font-poppins text-xl text-white px-10 rounded-md py-2"
                                label="Submit"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
