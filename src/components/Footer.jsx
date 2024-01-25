import Logo from "../assets/Images/logo.png";
import Button from "../components/Button";
import FooterProfile from "../assets/Images/footer-Image.png";

const Footer = () => {
    return (
        <div className="h-auto pt-10 pb-6 w-full px-4 bg-[#090e23]">
            <div className="flex flex-wrap p-10 md:px-28 justify-between border-b border-dashed pb-6">
                <div className="flex flex-col w-full md:w-auto mb-4 md:mb-0 md:mr-8">
                    <img src={Logo} className="w-36 h-14" alt="Logo" />
                    <p className="text-sm md:text-base text-white mt-2">
                        We believe in providing our clients with <br /> personalized and efficient logistics <br />{" "}
                        solutions that meet their unique
                        <br /> needs.
                    </p>
                </div>
                <div className="flex flex-col w-full md:w-auto mb-4 md:mb-0 md:mr-8">
                    <h4 className="text-xl font-semibold mb-2 md:mb-4 text-white">NAVIGATION</h4>
                    <ul className="text-white font-sans flex flex-col gap-y-2">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="flex flex-col w-full md:w-auto mb-4 md:mb-0 md:mr-8">
                    <h4 className="text-xl font-semibold mb-2 md:mb-4 text-white">RECENT PROJECT</h4>
                    <img src={FooterProfile} className="w-full h-32 object-cover" alt="Recent Project" />
                </div>
                <div className="flex flex-col w-full md:w-auto">
                    <h4 className="text-xl font-semibold mb-2 md:mb-4 text-white">SUBSCRIBE US</h4>
                    <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="px-4 py-2 rounded-md mb-2 md:mb-4 text-white"
                    />
                    <Button className="px-6 md:px-12 rounded-md py-2 text-white bg-[#1195d6]" label="SUBSCRIBE NOW" />
                </div>
            </div>
            <div className="text-center mt-5 text-sm font-sans text-white">
                <h3>COPYRIGHT © 2024 MASSSHIPPING</h3>
            </div>
        </div>
    );
};

export default Footer;
