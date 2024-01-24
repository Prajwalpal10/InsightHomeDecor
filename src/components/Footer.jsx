import React from 'react'

function Footer() {
  return (
  
  <>
  <br/>
<hr />
    <div className=' relative flex  w-[80%] ml-[10%] mt-[2%] p-5 justify-between'>
       <Card img={"src/assets/images/Icon/shield.png"} heading={"10 Year Warrenty"}  text={"Choose interiors designed with superior quality material, leaving no room for defects."} />
       <Card img={"src/assets/images/Icon/family.png"} heading={"200+ Happy Families"} text={"We'll offer exceptional seating options that ensure comfort, reliability, and faster delivery. "}/>
       <Card img={"src/assets/images/Icon/expert.png"} heading={"35+ Design Experts"}  text={"Explore design ideas and co-create your dream home with our experienced designers"}/>
       <Card img={"src/assets/images/Icon/customize.png"} heading={"Personalize Designs"} text={"Complete your design journey and get unwavering support from our dedicated care team."}/>
    </div>
  </>
  )
}

const Card=({img,heading,text})=>{
  return(
    <>
    <div className='text-center justify-center align-center w-[25%] bl-2 bl-zinc-700'>
       <div className='align-center justify-center flex'>
                <img className='h-28 ' src={img} alt="" />
       </div>
         <div>
          <p className='p-3 text-zinc-700 text-2xl font-semibold'>{heading}</p>
         </div>
         <p className='w-[80%]  ml-[10%]'>{text}</p>
       </div>
    
    </>
  )
}

export default Footer
