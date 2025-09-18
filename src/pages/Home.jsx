import React, { useContext, useState } from 'react'
import Nav from '../Components/Nav'
import Categories from '../Category'
import Card from '../Components/Card'
import { food_items } from '../food'
import { RxCross2 } from "react-icons/rx";

import { dataContext } from '../Context/UserContext'

const Home = () => {
     
  let {cate,setcate,input,showCart,setshowCart} = useContext(dataContext)
    

    function filter(Category){
        if(Category === "All"){
            setcate(food_items)
        }else{
            let newList = food_items.filter((item)=>(item.food_category === Category))
            setcate(newList)
        }
    }


  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav/>
      {!input?<div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
        {Categories.map((item)=>{
            return<div className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl
             hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={()=>filter(item.name)}>
            {item.icon}
            {item.name}
            </div>
        })}
      </div>:null}
      
      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        {cate.map((item)=>(
            <Card name={item.food_name} image={item.food_image}
            price={item.price} id={item.id} type={item.food_type}/>

        ))}
      </div>
      <div className={`w-[40vw] h-[100%] fixed top-0 right-0 bg-white p-6 
      shadow-xl transition-all duration-500 ${showCart?"translate-x-0":"translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center'>
        <span className='text-green-400 text-[18px] font-semibold' >Order Items...</span>
        <RxCross2 className='text-green-400 w-[30px] h-[30px] cursor-pointer text-[18px] 
        font-semibold hover:text-gray-600' onClick={()=>setshowCart(false)}/>
        </header>
      </div>
      
    </div>
  )
}

export default Home
