import React, { Component } from 'react'
import OrdersController from '../contollers/OrdersController'
import {connect} from 'react-redux'
import {fetchOrders} from '../store/actions'

class OrderCard extends Component {
    constructor(props){
        super(props)
    }
    async componentDidMount(){
        let orders= await OrdersController.get();
        this.props.fetchOrders(orders);



      
    }
    render(){
        let orders=this.props.orders.map((order)=>{  
            
    return (
        <article key={order.id} class="flex border border-orangishred rounded items-center mb-4">
        <div className="w-32 "><img src={order.logo_url} class="w-full " alt=""/></div>
        <div className="flex justify-between items-center w-full pr-6">
            <div className=" px-4  border-l border-orangishred">
                <h2 className="text-browngray font-bold py-4">{order.name}</h2>
                <p className="text-browngray text-xs pb-1">Delivered</p>
                <p className="text-browngray text-xs pb-4">{order.time}</p>
            </div>
            <div className="">
                <h1 className="text-browngray font-bold">${order.total_cost}</h1>
            </div>
        </div>
    </article>
    )
});
return (
    <div>
       {orders}
             
      
</div>
    )
}
}
const mapStateToProps=({orders})=>{
    return{orders}
}
const mapActionsToProps={fetchOrders};

export default connect(mapStateToProps,mapActionsToProps)(OrderCard);
