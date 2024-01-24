import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LivingRoom from './LivingRoom'
import ModularKitchen from './ModularKitchen'
import Wordrobe from './Wordrobe'
import { Route,Routes } from 'react-router-dom'

import Nav from './Nav'

function Home() {
  return (
    <div className='relative   w-full h-screen bg-zinc-100'>
      
      <Nav />    
            <Routes >  
            <Route path="/" Component={Header}></Route>
                 <Route path="/LivingRoom" Component={LivingRoom}></Route>
                 <Route path="/ModularKitchen" Component={ModularKitchen}></Route>
                 <Route path="/Wordrobe" Component={Wordrobe}></Route>
               </Routes>

               
               <Footer/>

     

       
    </div>
  )
}

export default Home
