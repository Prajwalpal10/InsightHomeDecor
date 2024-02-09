import React from 'react'
import Imgslide from './Imgslide'
import LogoSlider from './LogoSlider'
import Number from './Number'
import End from './End'
import ReactPlayer from 'react-player'
function Header() {
  
  return (
    <>         
          
          <div className='relative w-full h-full mt-[3%] overflow-hidden shadow-2xl '>
            
                 <img  src="../src/assets/images/form.png" alt="" />
               
               </div>  
               
<Imgslide Title={"Living Room"} cat={"livingroom"}/>
<Imgslide Title={"Woordrobe"}  cat={"wordrobe"}/>
<Imgslide Title={"Modular Kitchen"} cat={"kitchen"}/>


<br />
<hr />
<div className='ml-[5%] mt-[2%] h-[50%]'>
  
  <h1 className='text-3xl font-bold text-zinc-800 text-center'>Experience that you will love</h1>

<div className='w-full h-full relative w-screen flex  bg-red-300 py-5'>
  <div className='w-[60%] '>

<ReactPlayer className=' ' url='https://youtu.be/c3WyJcO85aU?si=ZyTwFcpShIma9l_V' />
  </div>

<div className='bg-green-800'>
<p>Google Rating</p>
</div>
</div>
  
</div>
  <Number/>
  <End/>
 
<LogoSlider/>



    </>  
  )
}

export default Header
