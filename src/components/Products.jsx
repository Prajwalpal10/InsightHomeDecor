import React from 'react'
import Cards from './Cards';



function Products({data,Com,hero,discription}) {
   

  return (
    <>
     <div className=' w-[100%]  mt-24 overflow-hidden  '>
        <img className='object-cover h-auto ' src={hero} alt="" />
        <div className='absolute -mt-14 ml-[18%] w-screen w-[70%]  '>
            
            <h1 className='text-white font-semibold text-3xl '> {Com}</h1>
            <div className='border-solid border-red-700 border-2 w-[24%]  '></div>
            </div>
    </div>
    <div className="flex items-center   min-h-screen " >
  <div className="container mt-20 ml-auto mr-auto flex flex-wrap items-start">
    <div className="w-full pb-5">
    <div className='w-[60%] ml-[20%] mb-[5%] wrap text-justify'>
        <p className='text-2xl text-zinc-600'>{discription}</p>
    </div>
    </div>      
    {
      data.map((items) => (
        <Cards img={items.img} />            
        ))
      }    

</div>
</div>
      </>
  )
}

export default Products
