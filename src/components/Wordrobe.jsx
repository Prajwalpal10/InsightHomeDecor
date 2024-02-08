import React from 'react'
import Products from './Products';
function Wordrobe() {

const disc=`Wardrobes are furniture pieces that help store and organize clothing and other personal belongings which makes them an essential part of any bedroom design. 
Wardrobe designs can range from simple, single-door units to large, multi-door armoires and can be made of a variety of materials like wood, metal or plastic and they can be crafted in a range of decor styles. 
Let’s make your bedrooms as functional as they’re aesthetic, shall we?`
  return (
    <div>
      <Products data="wordrobe" Com={"Wordrobe Designs For Your Room"} hero="src\assets\images\Wordrobe\hero.webp" discription={disc}/>
    </div>
  )
}

export default Wordrobe
