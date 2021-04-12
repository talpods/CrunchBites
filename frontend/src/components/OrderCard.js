import React from 'react'

function OrderCard() {
    return (
        <article class="flex border border-orangishred rounded items-center mb-4">
        <div class="w-32 "><img src="img/McDonald's-Logo.png" class="w-full " alt=""/></div>
        <div class="flex justify-between items-center w-full pr-6">
            <div class=" px-4  border-l border-orangishred">
                <h2 class="text-browngray font-bold py-4">McDonald's</h2>
                <p class="text-browngray text-xs pb-1">Delivered</p>
                <p class="text-browngray text-xs pb-4">Feb 1, 2021 06:00 AM</p>
            </div>
            <div class="">
                <h1 class="text-browngray font-bold">$20.00</h1>
            </div>
        </div>
    </article>
    )
}

export default OrderCard
