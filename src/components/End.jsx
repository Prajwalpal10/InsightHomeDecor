import React from 'react'
import Form from './Form';
import { useState } from 'react';
import {Link } from 'react-router-dom'

function Card(prop){
   
   return(
    
    <div className="w-auto md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 ">
      <div className=" rounded-md m-h-64 p-2 w-[50%]  transform hover:translate-y-2 hover:shadow-xl hover:shadow-amber-400 hover: transition duration-300 hover:cursor-pointer">
      <Link to={prop.url} >
        <figure className="mb-3 " >
          <img src={prop.icon} alt="" class=" w-full  ml-auto mr-auto rounded-md " />
        </figure>        
                    </Link>
        <h1 className='text-4sm text-center'>{prop.Title}</h1>
      </div>    
    </div>
   )
}

function End() {
    
const [showForm, setShowForm] = useState(false);

const ShowForm = () => {
  setShowForm(!showForm);
}
   
  return (
    <>
    <hr />
    <div className='p-5 w-full'>
          
         <h1 className='text-3xl font-semibold text-zinc-700 text-center'> All-in-One interior Solution</h1> 
   
         <div className="flex items-center  " >
        <div className="container  mt-20 ml-[20%] mr-[10%] flex flex-wrap items-start ">
          {
              
              data.map(
                  (item)=>(
                   
                   
                      <Card icon={item.icon} Title={item.title} url={item.url}/>
                   
                      )
                      )
                    }
       
                    </div>
    </div>
    </div>
    <button className='p-4 mb-2  text-sm font-semibold text-white ml-[43%] rounded-md bg-gradient-to-r from-amber-500 to-pink-500'onClick={<Form/>} > BOOK FREE DESIGN SESSION NOW</button>
      
    <hr />

    
    {showForm && (<Form/>)}

    
                    </>
    
  )
}

export default End


const data=[
    {
        icon:"src/assets/images/Icon/wodrobe.webp",
        title:"Wardrobe",
        url:"./Wordrobe"
        
    },
    {
        icon:"src/assets/images/Icon/construction.webp",
        title:"Construction",
        url:"./LivingRoom"
    },
    {
        icon:"src/assets/images/Icon/crockery.webp",
        title:"Crockery",
        url:"./Wordrobe"
    },
    {
        icon:"src/assets/images/Icon/Modular-Kitchen.webp",
        title:"Modular Kitchen",
        url:"./ModularKitchen"
    },
    {
        icon:"src/assets/images/Icon/Pooja-unit.webp",
        title:"Pooja Unit",
        url:"./Wordrobe"
    },
    {
        icon:"src/assets/images/Icon/space.webp",
        title:"Space Saving",
        url:"./Wordrobe"
    },
    {
        icon:"src/assets/images/Icon/tv-unit.webp",
        title:"TV Unit",
        url:"./Wordrobe"
    },
    {
        icon:"src/assets/images/Icon/washroom.webp",
        title:"Washroom",
        url:"./Wordrobe"
    },
    {
        icon:"src/assets/images/Icon/movable.webp",
        title:"Movable",
        url:"./Wordrobe"
    }
];