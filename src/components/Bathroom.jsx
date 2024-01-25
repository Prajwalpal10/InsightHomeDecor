import React from 'react'
import Products from './Products';
function Bathroom() {

 const Bdata=[
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-1.jpg"
  },
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-2.jpg"
  },
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-3.jpg"
  },
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-4.jpg"
  },
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-5.jpg"
  },
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-6.jpg"
  },
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-7.jpg"
  },
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-8.jpg"
  },
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-9.jpg"
  },
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-10.jpg"
  },
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-11.jpg"
  },
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-12.jpg"
  },
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-13.jpg"
  },
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-14.jpg"
  },
  {
    Title:"",
    img:"src/assets/images/Bathroom/B-15.jpg"
  },
 ];

  const dis="Bathroom design is about finding the perfect balance between form and function, and with a little bit of planning and creativity, you can create a space that is not only beautiful but also functional.";
  return (
    <div >
      <Products data={Bdata} Com={"Bathroom Designs"} hero="src\assets\images\Livingroom\hero.webp" discription={dis}/>
    </div>
  )
}

export default Bathroom
