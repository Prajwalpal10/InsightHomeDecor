import React from 'react'
import Products from './Products';
import LogoSlider from './LogoSlider'
import Footer from './Footer';
function ModularKitchen() {


 const disc=`Transform your kitchen to the heart of your home with the help of HomeLane. From coffee dates to dinner parties, our end-to-end design and installation services will turn your kitchen into a stylish and functional space.
  Ready for the upgrade?`

  return (
    <>
   

    <div >
      <Products data="kitchen" Com={"Modular Kitchen Designs"} hero="src\assets\images\Kitchen\modular_kitchen_designs.webp" discription={disc}/>
    </div>
    <LogoSlider/>
  
    </>
  )
}

export default ModularKitchen
