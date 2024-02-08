import React from 'react'
import  { useState } from 'react'
function Cards(Props) {

  
  return (
    <div className="w-4/5 cursor-pointer md:w-1/2 lg:w-1/3 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2"  >
      
      <div className=" rounded-md m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-3">
          <img src={Props.img} alt="" class="h-64 ml-auto mr-auto rounded-md" />
        </figure>        
      </div>    
    </div>
  )
}

export default Cards
