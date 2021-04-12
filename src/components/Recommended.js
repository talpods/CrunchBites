import React from 'react'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Recommended() {
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-8 mx-auto ">
            <div className="flex flex-col text-center w-full mb-10">
                <h1 className="text-xl text-orangishred-800 tracking-widest font-medium title-font my-2">TOP RESTAURANTS</h1>
            </div>
        <div className="container py-5 pl-12 mx-auto">
        <div className="flex flex-wrap -m-2 ">
            <RestaurantCard/>
        </div>
        </div>
        <Link to={'Restaurants'}>
                            <Button type="Light" text="Find more" className="flex justify-center mx-auto w-48 my-8"/>
                        </Link>
        </div>
        </section>
    )
}
