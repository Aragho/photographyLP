import React from 'react'
import { FaCamera } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png";
import fifth from "../assets/fifth.png";
import sixth from "../assets/sixth.png";

const Pages = () => {
    return (
        <div className='relative w-full h-auto pb-20 mt-4'>
            <div className=' w-full h-[640px] flex flex-col gap-11 justify-center items-center ' >
                <h1 className='text-[#1A093C] font-bold text-[40px]  text-center'>Why Choose us</h1>
                <div className="flex flex-col items-center gap-14 lg:flex-row lg:mt-28 lg:items-start">
    <div className="w-full max-w-[400px] flex flex-col items-center lg:items-start text-center lg:text-left">
        <FaCamera className="text-3xl sm:text-4xl text-blue-900" />
        <h1 className="text-[#1A093C] font-bold text-lg sm:text-xl">Professional editing</h1>
        <h2 className="text-sm sm:text-lg text-[#1A093C]">Your creativity our inspiration. Whatever you want</h2>
    </div>

    <div className="w-full max-w-[400px] flex flex-col items-center lg:items-start text-center lg:text-left">
        <FaCircleDollarToSlot className="text-3xl sm:text-4xl text-blue-900" />
        <h1 className="text-[#1A093C] font-bold text-lg sm:text-xl">Long hours shoots</h1>
        <h3 className="text-sm sm:text-lg text-[#1A093C]">Your creativity our inspiration. Whatever you want</h3>
    </div>

    <div className="w-full max-w-[400px] flex flex-col items-center lg:items-start text-center lg:text-left">
        <AiFillPicture className="text-3xl sm:text-4xl text-blue-900" />
        <h1 className="text-[#1A093C] font-bold text-lg sm:text-xl">Extensive equipment</h1>
        <h3 className="text-sm sm:text-lg text-[#1A093C]">Your creativity our inspiration. Whatever you want</h3>
    </div>
</div>

            </div>
            <div className="  grid grid-cols-1 lg:grid-cols-2 gap-4 mt-36 px-4 sm:px-6 md:px-10">
    <div className="relative grid grid-cols-3 gap-2 w-full max-w-[500px] mx-auto ml-3">
        <img src={first} alt="cam" className="w-full max-w-[152px] h-auto object-cover" />
        <img src={second} alt="cam" className="w-full max-w-[152px] h-auto object-cover" />
        <img src={third} alt="cam" className="w-full max-w-[152px] h-auto object-cover" />
        <img src={fourth} alt="cam" className="w-full max-w-[152px] h-[200px] mt-[-50px] rounded-md object-cover" />
        <img src={fifth} alt="cam" className="w-full max-w-[152px] h-auto object-cover" />
        <img src={sixth} alt="cam" className="w-full max-w-[200px] h-auto object-cover" />
    </div>
    <div className="flex flex-col p-6 sm:p-12">
        <h1 className="text-[32px] sm:text-[48px] lg:text-[60px] text-[#1A093C] font-bold">
            Experiments and personal projects.
        </h1>
        <p className="mt-4 sm:mt-8 text-[#1A093C] text-sm sm:text-base">
            Your ceremony & reception venues, your vision, your dress, your colors, and anything else you would like to share with us.
            I am a Gold Coast and Brisbane.
        </p>
    </div>
</div>

<div className="border border-b-[#F6F5FB] w-full h-auto flex justify-center py-10">
    <div className="flex flex-wrap gap-6 sm:gap-14 justify-center text-center">
        <div>
            <h1 className="text-[#1A093C] font-extrabold text-[32px] sm:text-[40px]">58+</h1>
            <h2 className="text-[16px] sm:text-[20px] text-[#1A093C]">Cute Customers</h2>
        </div>
        <div>
            <h1 className="text-[#1A093C] font-extrabold text-[32px] sm:text-[40px]">38+</h1>
            <h3 className="text-[16px] sm:text-[20px] text-[#1A093C]">Rewards</h3>
        </div>
        <div>
            <h1 className="text-[#1A093C] font-extrabold text-[32px] sm:text-[40px]">98+</h1>
            <h3 className="text-[16px] sm:text-[20px] text-[#1A093C]">Projects Completed</h3>
        </div>
    </div>
</div>


        </div>
    )
}

export default Pages;
