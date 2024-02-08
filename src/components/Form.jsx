import React from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import ReactPlayer from 'react-player'

function Form() {
  const [value, setValue] = useState(true)
  const close=()=>{
      setValue("display-none");
      console.log(value)
  }
  return (
     <div>
{
value?
     <div className=" -mt-10 fixed h-[100%] p-5 w-screen backdrop-blur-sm block z-10 snap-none overflow-x-hidden"  >
      <div className="container w-full absolute mt-[5%]">
               
          <button className='text-2xl font-bold ml-[90%]  h-auto w-auto text-white rounded-full text-yellow-500' onClick={()=>setValue(!value)}>X</button>
          
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-zinc-300 rounded-xl mx-auto shadow-lg overflow-hidden bg-zinc-100">
          <div className="w-full p-2 lg:w-1/2 flex flex-col items-center object-fit justify-center  bg-no-repeat bg-cover bg-center">
          <ReactPlayer playing url={['src/assets/images/Untitled design.mp4']}  loop={true}/>
            </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2  className="text-3xl mb-4 font-semibold text-zinc-700">Book Free Consultaion</h2>
           
           
                 
              <div className="">
                <input type="text" placeholder="Enter Your Name " className="border border-gray-400 py-1 px-2 w-[80%] rounded-md"/>
                
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Enter Your Email" className="border border-gray-400 py-1 px-2 w-[80%] rounded-md"/>
              </div>
              <div className="mt-5">
                <input placeholder="Mobile Number" className="border border-gray-400 py-1 px-2 h-10 w-[80%] rounded-md"/>
              </div>
              <div className="mt-5">
                <input placeholder="Enter Your Current Localization / City" className="border border-gray-400 py-1 px-2 h-10 w-[80%] rounded-md"/>
              </div>
              <div className="mt-5">
                <input placeholder="Reuirements" className="border border-gray-400 py-1 px-2 h-10 w-[80%] rounded-md"/>
              </div>
              <div className="mt-5 flex" >
                <label htmlFor="Media" className='text-red-500 '>Reference Area</label>
                  <input type="file" name="Media" id="" className='text-grey-600 '/>
              </div>
             
              <div className="mt-5">
                <button className="w-full  font-2xl bg-gradient-to-r from-amber-500 to-pink-500 py-3 rounded-md text-center text-white">Book Free Consultaion 😊</button>
              </div>
            
          </div>
        </div>
      </div>
    </div>:null
}

     </div>
   
  )
}

export default Form
