import React from 'react'
import {Link } from 'react-router-dom'
import Form from './Form'
import { useState } from 'react';
function Nav() {

   const [showForm, setShowForm] = useState(false);

   const ShowForm = () => {
     setShowForm(!showForm);
   }
  return (
  
  
   <>
   
   <div className='fixed top-0 left-0 right-0 z-10 w-full h-16 p-3 font- flex justify-between bg-white shadow-xl'>
               <div className='h-12                    '>
                  <Link to="/">   
                  <img className='w-full h-full' src="src\assets\images\logo.png" alt="Logo" />
                  </Link>
               </div>

               <div className='w-4/5 p-4  relative text-zinc-600 text-sm'>
              <ul className='flex justify-between '>
                   <li><Link to="/">Design Gallary</Link></li>
                   <li><Link to="./ModularKitchen">Modular Kitchen</Link></li>
                   <li><Link to="./LivingRoom">Living Room</Link></li>
                   <li><Link to="./Wordrobe">Wordrobe</Link></li>
                   <li><Link to="./Bathroom">Bathroom</Link></li>
                   <li><Link to="/">Home Office</Link></li>
                   <li><Link to="/">Space Saving Furniture</Link></li>
                  </ul>
               </div>

               <div className='mt-4'>
              <form >
                <button className='p-1 bg-gradient-to-r from-amber-500 to-pink-500 rounded-lg text-sm font-semibold  text-center w-36 text-white  hover:bg-green-600 cursor-pointer ' onClick={ShowForm}>Get Free Estimate</button>
               </form>
               
               </div>
                  </div>

                  {showForm && (
                 <Form/>
                 )}
     
   </>
  )
}

export default Nav
