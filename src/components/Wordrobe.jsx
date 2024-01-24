import React from 'react'
import Products from './Products';
function Wordrobe() {

  const Wdata=[
    {
        Title:"Img-1",
        img:"src/assets/images/Wordrobe/w-1.webp"
    },
    {
        Title:"Img-2",
         img:"src/assets/images/Wordrobe/w-2.webp"
    },
    {
        Title:"Img-3",
         img:"src/assets/images/Wordrobe/w-3.webp"
    },
    {
        Title:"Img-4",
         img:"src/assets/images/Wordrobe/w-4.webp"
    },
    {
        Title:"Img-5",
         img:"src/assets/images/Wordrobe/w-5.webp"
    },
    {
        Title:"Img-6",
         img:"src/assets/images/Wordrobe/w-6.webp"
    },
    {
        Title:"Img-7",
         img:"src/assets/images/Wordrobe/w-7.webp"
    },
    {
        Title:"Img-8",
         img:"src/assets/images/Wordrobe/w-8.webp"
    },
    {
        Title:"Img-9",
         img:"src/assets/images/Wordrobe/w-9.webp"
    },
    {
        Title:"Img-10",
         img:"src/assets/images/Wordrobe/w-10.webp"
    },
    {
        Title:"Img-11",
        img:"src/assets/images/Wordrobe/w-11.webp"
    },
    {
        Title:"Img-12",
        img:"src/assets/images/Wordrobe/w-13.webp"
    }
   
 ];
const disc=`Wardrobes are furniture pieces that help store and organize clothing and other personal belongings which makes them an essential part of any bedroom design. 
Wardrobe designs can range from simple, single-door units to large, multi-door armoires and can be made of a variety of materials like wood, metal or plastic and they can be crafted in a range of decor styles. 
Let’s make your bedrooms as functional as they’re aesthetic, shall we?`
  return (
    <div>
      <Products data={Wdata} Com={"Wordrobe Designs For Your Room"} hero="src\assets\images\Wordrobe\hero.webp" discription={disc}/>
    </div>
  )
}

export default Wordrobe
