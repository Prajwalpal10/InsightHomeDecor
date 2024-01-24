import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider=    () => {
    const [settings] = useState({ 

       dots:true,
            infinite: true,
             slidesToShow: 4, 
             slidesToScroll: 4,
              autoplay: true,
               speed: 300,
               arrows:false,
                autoplaySpeed: 4000, 
                cssEase: "linear" });


    const images = [
        "src/assets/images/Partners/asian-paints-logo-freelogovectors.net_.webp",
        "src/assets/images/Partners/Elica_logo.webp",
        "src/assets/images/Partners/fevicol-logo.webp",
        "src/assets/images/Partners/Hafele-Partners logo.webp",
        "src/assets/images/Partners/invisible-bed.webp",
        "src/assets/images/Partners/logo-faber.webp",
        "src/assets/images/Partners/Marshalls.webp",
        
        "src/assets/images/Partners/png-transparent-urbaladder-logo.png",
        "src/assets/images/Partners/spitze.webp",
        "src/assets/images/Partners/welspun-logo.webp",
        
    ];
        
return(
 <div>   
    <h2 className='text-2xl font-bold text-center p-5'>Our trusted partners</h2>
     <Slider {...settings} > 
     { 
        images.map((image, index)=> (
        <div key={index} className="container pt-5 ml-20 " > 
             <img src={image} alt="logo" className="h-18 w-32" /> 
        </div>
        
        ))
      } 
      
      
      </Slider >
</div >

        );

    }

export default LogoSlider