import React from 'react'

function RestaurantCard() {
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full transform transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110">
        <a className="block relative h-48 rounded overflow-hidden">
            <img alt="Restaurant" className="object-cover object-center w-4/5 h-4/5 block " src="https://www.malivraisonpaul.fr/pub/Logo.png" />
        </a>
        <div className="mt-2">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Paul Restaurant</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">French Daily Food</h2>
        </div>
    </div> 
    )
}

export default RestaurantCard
