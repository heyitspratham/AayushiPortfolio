import React from "react";
import {AiOutlineMail ,AiOutlineInstagram} from "react-icons/ai"

const Navbar = ({ isOpen, setIsOpen }) => {
  const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <div className={`${isOpen && " border-b-2 "} sticky top-0 z-50 flex justify-between md:justify-between bg-[#0f4c5c] text-white p-3`}>
        {/* <div className="hidden md:block"></div> */}
        
      <div className={`md:left-0 text-2xl md:hidden`}>AS.</div>
      <div className={`md:left-0 text-2xl hidden md:block`}>Aayushi Shukla.</div>
      <button
        className="md:hidden flex flex-col  w-12  justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)
        }
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              && "rotate-45 translate-y-[10px] "
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen && "opacity-0" 
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              && "-rotate-45 -translate-y-[10px]"
          }`}
        />
      </button>
      <div className="hidden md:block ">
      <div className="flex items-center justify-center absolute right-1">
      <div className='flex flex-row mr-5 justify-center items-center '>
            <AiOutlineMail className='mx-1 translate-y-0.5' size={18}/>
            <span className=' mx-1'>aayu.shukla04@gmail.com</span>
        </div>
        <div className='flex flex-row justify-center items-center '>
            <AiOutlineInstagram className='mx-1 translate-y-0.5' size={18}/>
            <span className=' mx-1'>@aayushi.shukla_</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
