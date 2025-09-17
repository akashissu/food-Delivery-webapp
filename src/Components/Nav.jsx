import React, { useContext } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from '../Context/UserContext';


const Nav = () => {
  let {input,setInput,cate,setCate} = useContext(dataContext)
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
            <MdFastfood className='w-[30px] h-[30px] text-green-400'/>
        </div>
        <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 shadow-xl rounded-md md:w-[70%]' onSubmit={(e)=>e.preventDefault()}>
            <IoMdSearch className='text-green-400 w-[20px] h-[20px] shadow-md rounded-md'/>
        <input type="text" placeholder='Serch Food Items....' className='w-[100%] outline-none text-[16px] md:text-[20px]' onChange={(e)=>setInput(e.target.value)} value = {input}/>
        </form>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'>
            <span className='absolute top-0 right-2 text-green-400 font-bold text-[18px]'>0</span>
            <FiShoppingBag className='w-[30px] h-[30px] text-green-400'/>
        </div>
      
    </div>
  )
}

export default Nav
