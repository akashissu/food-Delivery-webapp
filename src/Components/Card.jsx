import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";




const Card = ({name,image,id,price,type}) => {
  return (
    <div className='w-[280px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 '>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
      <img src={image} alt=""/>
      </div>
      <div className='text-2xl text-semibold'>
      {name}
      </div>
      <div className='w-full flex justify-between items-center'>
      <div className='text-lg text-bold text-green-500'>
        RS {price}/-
      </div>
      <div className='flex justify-center items-center text-green-500 text-lg font-semibold gap-2'>
        {type === "veg"?<LuLeafyGreen />:<GiChickenOven />}
        
        <span>
            {type}
        </span>
      </div>
      
      </div>

      <button className='w-full p-3 rounded-lg bg-green-300 text-gray-700
       hover:bg-green-500 transition-all cursor-pointer'>Add the Dish</button>
    </div>
  )
}

export default Card
