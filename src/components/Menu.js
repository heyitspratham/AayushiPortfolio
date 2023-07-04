import React from 'react'
import {AiOutlineMail ,AiOutlineInstagram} from "react-icons/ai"
 
const Menu = ({isOpen, setIsOpen}) => {
  return (
    <div className={ `md:hidden z-100 sticky top-10 -translate-y-5 flex flex-col justify-center w-screen transition ease transform items-center h-screen bg-[#1f7a8c] ${!isOpen && "hidden "}`}>
        <img src={require("../assets/8.jpg")} className='h-32 w-32 p-1  bg-white object-cover object-top rounded-full mb-5' alt="" />
        <div className='bg-[#0f4c5c] text-white p-5 rounded-3xl'>
        <h1 className='text-3xl text-center '>Contact Me</h1>
        <div className='flex flex-row my-5 justify-center items-center '>
            <AiOutlineMail className='mx-2' size={30}/>
            <span className='text-xl mx-2'>aayu.shukla04@gmail.com</span>
        </div>
        <div className='flex my-5 flex-row justify-center items-center '>
            <AiOutlineInstagram className='mx-2' size={30}/>
            <span className='text-xl mx-2'>@aayushi.shukla_</span>
        </div>
        </div>

    </div>
  )
}

export default Menu