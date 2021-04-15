import React, { Component } from 'react'

import OrderCard from './OrderCard'


class Orders extends Component {
   
    render(){
    
    return (
        
        <div className="grid mx-auto md:w-4/6 p-6 ">
            <h1 className="text-xl tracking-widest font-medium title-font my-2 text-orangishred-800 text-center">ORDERS</h1>
          
           <OrderCard/>
    
            </div>
    )
       
}
}


export default Orders
