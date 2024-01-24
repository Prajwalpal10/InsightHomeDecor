import React from 'react'
import Products from './Products';
import LogoSlider from './LogoSlider'
import Footer from './Footer';
function ModularKitchen() {

  const MKdata=[
    {
        Title:"Img-1",
        img:"src/assets/images/Kitchen/kitchen-1.webp"
    },
    {
        Title:"Img-2",
        img:"src/assets/images/Kitchen/kitchen-2.webp"
    },
    {
        Title:"Img-3",
        img:"src/assets/images/Kitchen/kitchen-3.webp"
    },
    {
        Title:"Img-4",
        img:"src/assets/images/Kitchen/kitchen-4.webp"
    },
    {
        Title:"Img-5",
        img:"src/assets/images/Kitchen/kitchen-5.webp"
    },
    {
        Title:"Img-6",
        img:"src/assets/images/Kitchen/kitchen-6.webp"
    },
    {
        Title:"Img-7",
        img:"src/assets/images/Kitchen/kitchen-7.webp"
    },
    {
        Title:"Img-8",
        img:"src/assets/images/Kitchen/kitchen-8.webp"
    },
    {
        Title:"Img-9",
        img:"src/assets/images/Kitchen/kitchen-9.webp"
    },
    {
        Title:"Img-10",
        img:"src/assets/images/Kitchen/kitchen-10.webp"
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

 const disc=`Transform your kitchen to the heart of your home with the help of HomeLane. From coffee dates to dinner parties, our end-to-end design and installation services will turn your kitchen into a stylish and functional space.
  Ready for the upgrade?`

  return (
    <>
   

    <div >
      <Products data={MKdata} Com={"Modular Kitchen Designs"} hero="src\assets\images\Kitchen\modular_kitchen_designs.webp" discription={disc}/>
    </div>
    <LogoSlider/>
  
    </>
  )
}

export default ModularKitchen
