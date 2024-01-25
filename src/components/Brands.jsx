import Logo from '../assets/Images/brand.png';

const Brands = () => {
    return (
        <div className="bg-[#1195d6] md:h-40 px-5 py-8 md:px-10 lg:px-28 flex flex-col md:flex-row items-center justify-between">
            <div className='flex justify-center items-center mb-4 md:mb-0'>
                <img src={Logo} className='w-8 h-8 md:w-12 md:h-12' alt="" />
                <h1 className='text-bold font-poppins text-white text-lg md:text-2xl ml-2 md:ml-4'>logoipsum</h1>
            </div>
            <div className='flex justify-center items-center mb-4 md:mb-0 md:ml-4'>
                <img src={Logo} className='w-8 h-8 md:w-12 md:h-12' alt="" />
                <h1 className='text-bold font-poppins text-white text-lg md:text-2xl ml-2 md:ml-4'>logoipsum</h1>
            </div>
            <div className='flex justify-center items-center mb-4 md:mb-0 md:ml-4'>
                <img src={Logo} className='w-8 h-8 md:w-12 md:h-12' alt="" />
                <h1 className='text-bold font-poppins text-white text-lg md:text-2xl ml-2 md:ml-4'>logoipsum</h1>
            </div>
            <div className='flex justify-center items-center mb-4 md:mb-0 md:ml-4'>
                <img src={Logo} className='w-8 h-8 md:w-12 md:h-12' alt="" />
                <h1 className='text-bold font-poppins text-white text-lg md:text-2xl ml-2 md:ml-4'>logoipsum</h1>
            </div>
            <div className='flex justify-center items-center mb-4 md:mb-0 md:ml-4'>
                <img src={Logo} className='w-8 h-8 md:w-12 md:h-12' alt="" />
                <h1 className='text-bold font-poppins text-white text-lg md:text-2xl ml-2 md:ml-4'>logoipsum</h1>
            </div>
            <div className='flex justify-center items-center mb-4 md:mb-0 md:ml-4'>
                <img src={Logo} className='w-8 h-8 md:w-12 md:h-12' alt="" />
                <h1 className='text-bold font-poppins text-white text-lg md:text-2xl ml-2 md:ml-4'>logoipsum</h1>
            </div>
        </div>
    );
};

export default Brands;
