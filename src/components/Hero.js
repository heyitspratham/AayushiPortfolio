import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen w-screen  rounded-lg pb-5 pt-3 px-3'>
        <div className=' w-full h-full relative'>
            <div className='absolute w-full h-full p-[inherit] bg-black rounded-lg opacity-80 overflow-hidden' ></div>
            <div className='absolute text-white right-72 top-80 text-7xl flex flex-col gap-4'>
                <div>Hi, I am</div>
                <div>Aayushi Shukla</div>
                <div>आयुषी शुक्ला</div>
            </div>
            <img src={require("../assets/10.jpg")} className='object-cover w-full rounded-lg h-full' alt="" />
        </div>

    </div>
  )
}

export default Hero
