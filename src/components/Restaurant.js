import React, { Component } from 'react'
import RestaurantCard from './RestaurantCard'

export class Restaurant extends Component {
    render() {
        return (
            <section className="text-gray-600 body-font">
            <div className="container px-8 mx-auto ">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="text-xl tracking-widest font-medium title-font my-2 text-orangishred-800">RESTAURANTS</h1>
                </div>
            <div className="container py-5 pl-12 mx-auto">
            <div className="flex flex-wrap -m-2 ">
                <RestaurantCard/>
            </div>
            </div>
           
            </div>
            </section>
        )
    }
}

export default Restaurant
