import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Media } from '../Data/Media';

function Imgslide({Title,cat}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
      };
  return (
    <div className='w-11/12 m-auto '>
    <div className="mt-20">
    <h5 className="text-2xl text-gray-700 font-semibold mb-5">
      {Title}
      </h5>
    <Slider {...settings}>
   {
     Media.filter(Media => Media.category===cat).map((d)=>(
       
        <div key={d.name} className="bg-white Otext-black rounded-lg">
                     <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-lg'>
                              <img src={d.img } alt="" className="h-full w-full rounded-lg"/>
                     </div>
       </div>

     ))
   }
   </Slider>
    </div>
   </div> 
  )
}

export default Imgslide
