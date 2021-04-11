import React from 'react'
import bg from '../img/hero-bg.jpg'
import Button from './Button'

function Hero() {
    return (
     
            <main className="relative bg-no-repeat bg-cover" style={{
                height: "auto",
    width: "100%",
    backgroundImage: `url(${bg})`
   }}>
       
                <div className="flex flex-col container py-24 mx-auto  ">
                    <h1 className=" my-2 text-center text-3xl text-browngray-800 font-bold  " > YOUR FAVORITE FOOD IN ONE CLICK</h1>
                    <p className=" my-8 text-center text-3xl text-browngray-800 ">The meals you love, delivered with care</p>
                 
          <Button text="Let's Start" type="Light" className="flex justify-center mx-auto w-48 my-8"/>
              
              
                </div>
                <div className="absolute top-0 bg-gray-100 opacity-30 h-full w-full">hi</div>
            </main>
           
    

    )
}

export default Hero
