
import Cards from './Cards';
import { Media } from '../../Data/Media';

function Products({data,Com,hero,discription}) {
  
   

  return (
    <>
     <div className=' w-[100%]  mt-24 overflow-x-hidden '>
        <img className='object-cover h-auto  ' src={hero} alt="" />
        <div className='w-[80%] absolute -mt-14 ml-[18%]  '>
            
            <h1 className='max-w-[80%] text-white font-semibold text-3xl '> {Com}</h1>
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
      Media.filter(Media => Media.category === data).map((items) => (
        <Cards img={items.img}  />            
        ))
      }    

</div>
</div>
      </>
  )
}

export default Products
