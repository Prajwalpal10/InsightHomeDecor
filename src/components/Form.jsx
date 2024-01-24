import React from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
function Form() {
  const [value, setValue] = useState()
  return (
   
     <div className="min-h-screen py-40" >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center object-fit justify-center  bg-no-repeat bg-cover bg-center">
             <img className='h-[90%] rounded-md object-fit' src="src\assets\images\front-img.webp" alt="" />
            </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2  className="text-3xl mb-4 font-semibold text-zinc-700">Book a Session</h2>
           
            <form action="./">
                 
              <div className="">
                <input type="text" placeholder="Enter Your Name " className="border border-gray-400 py-1 px-2 w-[80%] rounded-md"/>
                
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Enter Your Email" className="border border-gray-400 py-1 px-2 w-[80%] rounded-md"/>
              </div>
              <div className="mt-5">
              <PhoneInput
                    country="IN"
                    value={value}
                    onChange={setValue} 
                    />
                              
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Enter Your Current Localization / City" className="border border-gray-400 py-1 px-2 h-10 w-[80%] rounded-md"/>
              </div>
             
              <div className="mt-5">
                <button className="w-full bg-purple-500 py-3 rounded-md text-center text-white">Book Design Session</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

   
  )
}

export default Form
