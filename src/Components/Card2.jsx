
import React from 'react'
import image1 from "../assets/image1.avif"
import { RiDeleteBinLine } from "react-icons/ri";


const Card2 = () => {
  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
        {/* //! left Wali DIV */}
      <div className='w-[60%] h-full flex gap-5'>
          <div className='w-[50%] h-full overflow-hidden rounded-lg'>
            <img src={image1} alt="" className='object-cover'/>
          </div>
          <div className='w-[40%] h-full flex flex-col gap-5'>
            <div className='text-lg text-gray-600 font-semibold'>Pancake</div>
            <div className='w-[110px] h-[50px] bg-slate-100 flex rounded-lg overflow-hidden 
            shadow-lg font-semibold border-2 border-green-400 text-xl'>
                <button className='w-[30%] text-green-400 h-full bg-white flex justify-center items-center hover:bg-gray-200'>-</button>
                <span className='w-[40%] h-full text-green-400 bg-slate-200 flex justify-center items-center'>1</span>
                <button className='w-[30%] h-full text-green-400 bg-white flex justify-center items-center hover:bg-gray-200'>+</button>
            </div>
          </div>
      </div>
       {/* //! Right Wali Div */}
      <div className='flex flex-col justify-start items-end gap-6'>
        <span className='text-xl text-green-400 font-semibold'>Rs 499/-</span>
        <RiDeleteBinLine className='text-xl text-red-600 font-semibold'/>

           
      </div>
    </div>
  )
}

export default Card2
