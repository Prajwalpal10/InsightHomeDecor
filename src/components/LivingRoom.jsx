import React from 'react'
import Products from './Products'
import Number from './Number';

function LivingRoom() {
    let Lidata=[
        {
            Title:"Img-1",
            img:"src/assets/images/Livingroom/lr-1.webp"
        },
        {
            Title:"Img-2",
            img:"src/assets/images/Livingroom/lr-2.webp"
        },
        {
            Title:"Img-3",
            img:"src/assets/images/Livingroom/lr-3.webp"
        },
        {
            Title:"Img-4",
            img:"src/assets/images/Livingroom/lr-4.webp"
        },
        {
            Title:"Img-5",
            img:"src/assets/images/Livingroom/lr-5.webp"
        },
        {
            Title:"Img-6",
            img:"src/assets/images/Livingroom/lr-6.webp"
        },
        {
            Title:"Img-7",
            img:"src/assets/images/Livingroom/lr-7.webp"
        },
        {
            Title:"Img-8",
            img:"src/assets/images/Livingroom/lr-8.webp"
        },
        {
            Title:"Img-9",
            img:"src/assets/images/Livingroom/lr-9.webp"
        },
        {
            Title:"Img-10",
            img:"src/assets/images/Livingroom/lr-10.webp"
        },
        {
            Title:"Img-11",
            img:"src/assets/images/Livingroom/lr-11.webp"
        },
        {
            Title:"Img-12",
            img:"src/assets/images/Livingroom/lr-13.webp"
        }
       
     ];
 
      const dis="Living Room designs are a reflection of personal style and taste. From modern and minimalist to cozy and traditional, there are endless possibilities for creating a space that is both functional and stylish. A well-designed living room can be the perfect place to relax, entertain guests, and enjoy time with family."

  return (
    <>
    <div >
      <Products data={Lidata} Com={"Living Room Interiors"} hero="src\assets\images\Livingroom\hero.webp" discription={dis}/>
    </div>
    
    <Number/>
    </>
  )
}

export default LivingRoom
