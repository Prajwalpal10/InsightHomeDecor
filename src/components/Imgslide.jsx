import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
     data.filter(data => data.category===cat).map((d)=>(
       
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


const data=[
    {
        Title:"Img-1",
        img:"src/assets/images/Wordrobe/w-1.webp",
        category:"wordrobe"
    },
    {
        Title:"Img-2",
         img:"src/assets/images/Wordrobe/w-2.webp",
         category:"wordrobe"
    },
    {
        Title:"Img-3",
         img:"src/assets/images/Wordrobe/w-3.webp",
         category:"wordrobe"
    },
    {
        Title:"Img-4",
         img:"src/assets/images/Wordrobe/w-4.webp",
         category:"wordrobe"
    },
    {
        Title:"Img-5",
         img:"src/assets/images/Wordrobe/w-5.webp",
         category:"wordrobe"
    },
    {
        Title:"Img-6",
         img:"src/assets/images/Wordrobe/w-6.webp",
         category:"wordrobe"
    },
    {
        Title:"Img-7",
         img:"src/assets/images/Wordrobe/w-7.webp",
         category:"wordrobe"
    },
    {
        Title:"Img-8",
         img:"src/assets/images/Wordrobe/w-8.webp",
         category:"wordrobe"
    },
    {
        Title:"Img-9",
         img:"src/assets/images/Wordrobe/w-9.webp",
         category:"wordrobe"
    },
    {
        Title:"Img-10",
         img:"src/assets/images/Wordrobe/w-10.webp",
         category:"wordrobe"
    },
    {
        Title:"Img-11",
        img:"src/assets/images/Wordrobe/w-11.webp",
        category:"wordrobe"
    },
    {
        Title:"Img-12",
        img:"src/assets/images/Wordrobe/w-13.webp",
        category:"wordrobe"
    }
,
    {
        Title:"Img-1",
        img:"src/assets/images/Kitchen/kitchen-1.webp",
        category:"kitchen"
    },
    {
        Title:"Img-2",
        img:"src/assets/images/Kitchen/kitchen-2.webp",
        category:"kitchen"
    },
    {
        Title:"Img-3",
        img:"src/assets/images/Kitchen/kitchen-3.webp",
        category:"kitchen"
    },
    {
        Title:"Img-4",
        img:"src/assets/images/Kitchen/kitchen-4.webp",
        category:"kitchen"
    },
    {
        Title:"Img-5",
        img:"src/assets/images/Kitchen/kitchen-5.webp",
        category:"kitchen"
    },
    {
        Title:"Img-6",
        img:"src/assets/images/Kitchen/kitchen-6.webp",
        category:"kitchen"
    },
    {
        Title:"Img-7",
        img:"src/assets/images/Kitchen/kitchen-7.webp",
        category:"kitchen"
    },
    {
        Title:"Img-8",
        img:"src/assets/images/Kitchen/kitchen-8.webp",
        category:"kitchen"
    },
    {
        Title:"Img-9",
        img:"src/assets/images/Kitchen/kitchen-9.webp",
        category:"kitchen"
    },
    {
        Title:"Img-10",
        img:"src/assets/images/Kitchen/kitchen-10.webp",
        category:"kitchen"
    },
    {
        Title:"Img-11",
        img:"src/assets/images/Livingroom/lr-11.webp",
        category:"kitchen"
    },
    {
        Title:"Img-12",
        img:"src/assets/images/Livingroom/lr-13.webp",
        category:"kitchen"
    },
    {
        Title:"Img-1",
        img:"src/assets/images/Livingroom/lr-1.webp",
        category:"livingroom"
    },
    {
        Title:"Img-2",
        img:"src/assets/images/Livingroom/lr-2.webp",
        category:"livingroom"
    },
    {
        Title:"Img-3",
        img:"src/assets/images/Livingroom/lr-3.webp",
        category:"livingroom"
    },
    {
        Title:"Img-4",
        img:"src/assets/images/Livingroom/lr-4.webp",
        category:"livingroom"
    },
    {
        Title:"Img-5",
        img:"src/assets/images/Livingroom/lr-5.webp",
        category:"livingroom"
    },
    {
        Title:"Img-6",
        img:"src/assets/images/Livingroom/lr-6.webp",
        category:"livingroom"
    },
    {
        Title:"Img-7",
        img:"src/assets/images/Livingroom/lr-7.webp",
        category:"livingroom"
    },
    {
        Title:"Img-8",
        img:"src/assets/images/Livingroom/lr-8.webp",
        category:"livingroom"
    },
    {
        Title:"Img-9",
        img:"src/assets/images/Livingroom/lr-9.webp",
        category:"livingroom"
    },
    {
        Title:"Img-10",
        img:"src/assets/images/Livingroom/lr-10.webp",
        category:"livingroom"
    },
    {
        Title:"Img-11",
        img:"src/assets/images/Livingroom/lr-11.webp",
        category:"livingroom"
    },
    {
        Title:"Img-12",
        img:"src/assets/images/Livingroom/lr-13.webp",
        category:"livingroom"
    }
   
   
 ];

