import Button from "./Button";

const TopSection = () => {
    return (
        <>
            <div className="bg-white flex h-[4rem] text-center  p-3 justify-between md:px-28">
                <div className="flex mt-2 flex-1 flex-wrap">
                    <p className="border-r pr-2 border-dashed font-Teko text-md border-gray-500">massshipping@mail.com</p>
                    <p className="ml-2 font-Teko text-md ">+1 (333) 000-0000</p>
                </div>
                <div>
                    <Button label="GET QUOTE" className="text-white px-6 rounded-md py-2 hover:bg-blue-300 bg-[#1195D6]" />
                </div>
            </div>
        </>
    );
};

export default TopSection;
