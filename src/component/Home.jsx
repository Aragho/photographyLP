import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import image from "../assets/image.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import small3 from "../assets/small (3).png";

const Home = () => {
    return (
        <div>
             <div className='h-auto min-h-screen relative flex flex-col md:flex-row items-center justify-center px-5 md:px-12 mt-12'>
            <div className='text-center md:text-left md:w-1/2 md:ml-12'>
                <h1 className='text-[35px] md:text-[60px] font-bold text-[#1A093C] leading-tight lg:max-w-10'>
                    Where creative process happens
                </h1>
                <p className='text-lg text-gray-700 mt-2'>
                    Your creativity, our inspiration. Whatever your story, set it free.
                </p>
                <button className='flex items-center border-none text-white bg-[#3F41A6] rounded-full py-3 px-5 mt-5'>
                    Get in Touch <IoIosArrowForward className='ml-2 mt-1' />
                </button>
            </div>
            <div className='relative w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-0'>
                <img src={image} alt='Main' className='w-[320px] md:w-[400px] lg:w-[500px] h-auto z-10' />
                <div className="flex flex-col md:flex-row gap-3 items-center justify-center mt-2">

                    <img 
                        src={image2} 
                        alt='Left Image' 
                        className='w-[160px] md:w-[40%] lg:w-[25%] shadow-lg' 
                    />
                    <img 
                        src={image1} 
                        alt='Right Image' 
                        className='w-[270px] md:w-[60%] lg:w-[45%] shadow-lg' 
                    />
                </div>

            </div>
        </div>
        <div className='  mt-12 w-full  h-auto flex flex-col   md:flex-row gap-3 lg:gap-52 justify-center items-center  '>
            <div className='w-full max-w-[483px] h-auto mx-auto md:mx-0'>
                <img src={small3} alt="flower"  className=" ml-7 w-[420px] h-auto object-cover"/>
            </div>
            <div className='w-[435px] h-[376px]  ml-10'>
                <h3 className='text-[#3F41A6] mt-8 font-bold'>GET TO KNOW US</h3>
                <h1 className='text-[#1A093C] font-bold  text-[40px] mt-9 lg:text-[40px]'>Why we make it happens</h1>
                <h4 className='text-[#1A093C]'> Your ceremony & reception venues, your vision, your dress, your colours and anythingelse you would like.</h4>
                <button className='flex items-center border-none text-white bg-[#3F41A6] rounded-full py-3 px-5  mt-16 lg:mt-14 '>
                    Get in Touch <IoIosArrowForward className='ml-2 mt-1' />
                </button>
            </div>

        </div>

        </div>
       
    );
};

export default Home;
