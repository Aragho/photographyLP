import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import flow from "../assets/flow.png"
import flow2 from "../assets/flow2.png"
import flow3 from "../assets/flow3.png"

const Photography = () => {
    return (
        <div className='h-auto mt-16 p-10 flex flex-col items-center lg:items-start '>
            <div className='p-6 text-[#1A093C] max-w-2xl rounded-lg'>
                <h1 className='text-2xl font-bold'>Floral Design in an Event Planning Company</h1>
                <p className='mt-3 text-lg'>
                    Your ceremony & reception venues, your vision, your dress, your colors, and anything else 
                    you would like to share with us. I am in Gold Coast and Brisbane.
                </p>
                <button className='flex items-center text-white bg-[#3F41A6] rounded-full py-3 px-6 mt-6'>
                    Get in Touch <IoIosArrowForward className='ml-2' />
                </button>
            </div>
            <div className=' sm:flex flex-row  md:flex-row gap-6 mt-10 w-auto  ml-[-30px]  '>
                <img src={flow3} alt="flow" className=" bg-[#C4C4C4] w-52 h-auto lg:self-end lg:ml-9" />  
                <img src={flow2} alt="flow" className="  bg-[#C4C4C4]  w-52 h-auto lg:self-center mt-6 lg:mb-28 lg:ml-44" />  
                <img src={flow} alt="flow" className="  bg-[#C4C4C4] w-52 h-auto  md:self-start mt-6 lg:mt-[-200px] lg:ml-44" />  
            </div>
            <div className=" w-48  border border-gray-500 rounded-lg mt-10 h-12   flex lg:ml-auto">
                <h1 className=" w-36 border-t-2 border-gray-600  mr-2 mt-5 "></h1>
                <h1 className="flex mt-2">Next <IoIosArrowForward className="mt-1"  /></h1></div>
        </div>
    )
}

export default Photography;
