import React from 'react'
import Imgslide from './Imgslide'
import LogoSlider from './LogoSlider'
import Number from './Number'
import End from './End'
function Header() {
  
  return (
    <>         
          
          <div className='relative w-full h-full overflow-hidden shadow-2xl '>
                 <img  src="src\assets\images\front2-img.webp" alt="" />
               
               </div>  
               
<Imgslide Title={"Living Room"} cat={"livingroom"}/>
<Imgslide Title={"Woordrobe"}  cat={"wordrobe"}/>
<Imgslide Title={"Modular Kitchen"} cat={"kitchen"}/>


  <Number/>
  <End/>
 
<LogoSlider/>



    </>  
  )
}

export default Header
