import React from 'react'
  

function Num(props){
  return(
  <div className='text-center m-auto  h-full w-1/4'>
  <h1 className='text-5xl font-bold text-zinc-800'>{props.no}</h1>
  <div className='text-zinc-500'>{props.title}</div>
</div>
  )
}


function Design(props){
  return(
  <div className='text-center m-auto  h-full w-1/4'>
     <div className='w-4/5'>
      <img classname=''   src={props.img} alt="" />
     </div>
  <div className='text-zinc-500 text-center w-4/5'>{props.text}</div>
</div>
  )
}



function Number() {
  
const data=[
  {
    img:"src/assets/images/session/S-1.webp",
    text:"Step 1. Meet Your Designer"

},
{
    img:"src/assets/images/session/S-2.webp",
    text:"Step 2. Walkthrough of HomeLane Studio"

},
{
    img:"src/assets/images/session/S-3.webp",
    text:`Step 3. Free Personalised 
          3D Designs on SpaceCraft Pro`

},
{
    img:"src/assets/images/session/S-4.webp",
    text:"Step 4. Get an Instant Quote."

}
];

  return (
    <div className='w-full h-full  p-10 bg-white'>
         <div className='In-Numbers '>
             <h2 className='text-4xl font-bold text-center'>Insight Home Decor in Numbers</h2>

            <div className='flex justify-between w-auto h-auto p-10  h-80 mt-5 ml-18'>
               <Num no={"200+"} title={"Happy Families"}/>
               <Num no={"600+"} title={"In-house Designs"}/>
               <Num no={"20,000+"} title={"Catalouge Products"}/>
               <Num no={"5+"} title={"Cities"}/>
               
            </div> 

         </div>

         <div className='Design '>
             <h2 className='text-4xl mt-20 font-bold text-center'>What is a Design Session ?</h2>

            <div className='flex justify-between w-auto h-auto p-12   h-80 mt-5 ml-18'>
             {
            data.map( (item)=>(
                    <Design img={item.img} text={item.text}/>

                      ))
             }  
            </div> 

         </div>
       
       
    </div>
  )
}




export default Number
