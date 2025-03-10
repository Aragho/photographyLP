import React from 'react';
import flower from "../assets/flower.png";
import flower1 from "../assets/flower1.png";
import flower2 from "../assets/flower2.png";
import flower3 from "../assets/flower3.png";
import flower4 from "../assets/flower4.png";
import flower5 from "../assets/flower5.png";
import flower6 from "../assets/flower6.png";
import flower7 from "../assets/flower7.png";
import flower8 from "../assets/flower8.png";
import { IoIosArrowForward } from "react-icons/io";
import youngboy from "../assets/youngboy.png";
import { Link } from 'react-scroll';

const Photoshoots = () => {
    return (
        <div className='bg-red-500 w-full h-auto py-10 px-4 overflow-x-hidden'>  
            <h1 className='text-[#1A093C] font-semibold text-3xl ml-10'>Our Awesome Works</h1>
            <h3 className='text-lg text-gray-800 mt-2 ml-10 '>See what we shooted</h3>
            <p className='text-sm text-gray-700 mt-1 text-center'>&copy; 2023 Photography by Your Name. All rights reserved.</p>
            <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 w-full gap-4 mt-6'>
                <img src={flower} alt='flower' className='w-full h-auto shadow-md rounded-lg' />
                <img src={flower1} alt='flower1' className='w-full h-auto shadow-md rounded-lg' />
                <img src={flower2} alt='flower2' className='w-full h-auto shadow-md rounded-lg' />
                <img src={flower3} alt='flower3' className='w-full h-auto shadow-md rounded-lg' />
                <img src={flower4} alt='flower4' className='w-full h-auto shadow-md rounded-lg' />
                <img src={flower5} alt='flower5' className='w-full h-auto shadow-md rounded-lg' />
                <img src={flower6} alt='flower6' className='w-full h-auto shadow-md rounded-lg' />
                <img src={flower7} alt='flower7' className='w-full h-auto shadow-md rounded-lg' />
                <img src={flower8} alt='flower8' className='w-full h-auto shadow-md rounded-lg' />
            </div>   
            <div className='bg-[#431898] w-full max-w-[1180px] h-auto rounded-3xl mt-20 mx-auto p-10 flex flex-col  '>
    <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <h1 className='text-white text-3xl font-semibold'>Get Started With Us</h1>
        <img src={youngboy} alt="hi" className='w-40 h-40 md:w-52 md:h-52 mt-4 md:mt-[-75px] md:ml-12' />
    </div>
    <h3 className='text-white text-lg mt-6 ] max-w-[800px]'>
        Your ceremony & reception venues, your vision, your dress, your colours,
        and anything else you would like to share with us.
    </h3>
    <button className='flex  text-black  bg-[#FFFFFF] rounded-full py-3 px-6 w-[200px] mt-6'>
        Get in Touch <IoIosArrowForward className=' mt-1 ml-2 bg-gray-500 text-white' />
    </button>
    
</div>
<div className="w-full max-w-[1200px] mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 md:px-10 py-5">
    <h1 className="text-[18px] sm:text-[20px] text-black">
        ZOKA &copy; 2022. Crafted by YEV YEV
    </h1>
    <ul className="flex flex-wrap gap-4 sm:gap-7 ">
        <li className="text-[#3C3842] font-medium">
            <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="text-[#3C3842]">
            <Link to="pages" smooth={true} duration={500}>Pages</Link>
        </li>
        <li className="text-[#3C3842]">
            <Link to="photography" smooth={true} duration={500}>Photography</Link>
        </li>
        <li className="text-[#3C3842]">
            <Link to="photoshoot" smooth={true} duration={500}>Photoshoots</Link>
        </li>
    </ul>
</div>



        </div>
    );
}

export default Photoshoots;
