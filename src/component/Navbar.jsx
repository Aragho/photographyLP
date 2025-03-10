import React, { useState } from "react";
import { Link } from "react-scroll";
import { CiPlay1 } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <nav className="relative ">
      <div className="md:hidden z-50 absolute top-5 right-5">
        {showSideBar ? (
          <FiX
            className="text-3xl cursor-pointer text-gray-500"
            onClick={() => setShowSideBar(false)}
          />
        ) : (
          <FiMenu
            className="text-3xl cursor-pointer text-gray-500"
            onClick={() => setShowSideBar(true)}
          />
        )}
      </div>

    
      <div className=" container mx-auto flex justify-between items-center px-10 py-5">
        <h1 className="font-bold text-[30px] text-black">ZOKA</h1>
        <ul className="hidden md:flex gap-7   ">
          <li className="text-[#1A093E] font-medium" >
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className="text-[#787282]">
            <Link to="pages" smooth={true} duration={500}>Pages</Link>
          </li>
          <li className="text-[#787282]">
            <Link to="photography" smooth={true} duration={500}>Photography</Link>
          </li>
          <li className="text-[#787282]">
            <Link to="photoshoot" smooth={true} duration={500}>Photoshoots</Link>
          </li>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <button className="border border-[#3F41A6] rounded-full text-[#3F41A6] py-2 px-4 flex gap-3  mt-[-10px] ">
            Youtube
            <CiPlay1 className="text-lg text-[#3F41A6] mt-1" />
          </button>
        </a>
        </ul>
      
      </div>

    
      {showSideBar && (
        <div className="fixed top-0 left-0 w-2/3 h-full bg-white p-5 flex flex-col space-y-6 shadow-lg md:hidden z-[60]">
         
            <ul className="flex flex-col gap-6">
              <li className="text-[#1A093E] font-medium">
                <Link to="home" smooth={true} duration={500} onClick={() => setShowSideBar(false)}>Home</Link>
              </li>
              <li className="text-[#787282]">
                <Link to="pages" smooth={true} duration={500} onClick={() => setShowSideBar(false)}>Pages</Link>
              </li>
              <li className="text-[#787282]">
                <Link to="photography" smooth={true} duration={500} onClick={() => setShowSideBar(false)}>Photography</Link>
              </li>
              <li className="text-[#787282]">
                <Link to="photoshoot" smooth={true} duration={500} onClick={() => setShowSideBar(false)}>Photoshoots</Link>
              </li>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <button className="border border-[#3F41A6] rounded-full text-[#3F41A6] py-2 px-4 flex gap-3 mt-5">
                Youtube
                <CiPlay1 className="text-lg text-[#3F41A6] mt-1" />
              </button>
            </a>
            </ul>
           
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;
