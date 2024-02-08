import React from 'react'
import Products from './Products'
import Number from './Number';

function LivingRoom() {
    
 
      const dis="Living Room designs are a reflection of personal style and taste. From modern and minimalist to cozy and traditional, there are endless possibilities for creating a space that is both functional and stylish. A well-designed living room can be the perfect place to relax, entertain guests, and enjoy time with family."

  return (
    <>
    <div >
      <Products data="livingroom" Com={"Living Room Interiors"} hero="src\assets\images\Livingroom\hero.webp" discription={dis}/>
    </div>
    
    <Number/>
    </>
  )
}

export default LivingRoom
