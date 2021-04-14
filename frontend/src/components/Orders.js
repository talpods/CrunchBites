import React, { Component } from 'react'

import OrderCard from './OrderCard'


class Orders extends Component {
   
    render(){
    
    return (
        
        <div class="grid mx-auto md:w-4/6 p-6 ">
            <h1 class="pb-4 text-lg text-orangishred-800 font-semibold">Order history</h1>
          
           <OrderCard/>
    
            </div>
    )
       
}
}


export default Orders
