import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMenu } from '../store/actions'
import MenuController from '../contollers/MenuController'
import axios from 'axios'


export class Menu extends Component {

    constructor(props) {
        super(props)
        this.state={
            cart:[],       

            
        }

    }
    async componentDidMount() {

        console.log(this.props);


        let id = this.props.match.params.id;

        let menu = await MenuController.get(id);
        this.props.fetchMenu(menu);
        console.log(menu)
      

    }
    getTotalCost(){
        let cost=0;
        let deliveryCost=10;
        this.state.cart.map(dish=>{
            cost+=dish.price; 
          
        })
        cost+=deliveryCost;
        console.log(cost)
        return cost;
      


    }
    getSelectedItem(){
        let item="";
  
        this.state.cart.map(dish=>{
          item=item +","+dish.dish;
          
        })
      
        return item;
      


    }
    addToCart(dish){
      this.setState(cart=>({
          
        cart:[...this.state.cart,dish]}
      ))
     console.log(dish)

    }
   
    


    render() {
        if (this.props.menu.length > 0) {

            let menu = this.props.menu.map((dish) => {
                return (

                    <div className="menu" key={dish.id} >
                        <tr className=" grid grid-cols-3  ">
                            <td className=" border border-red-500 ">{dish.dish}</td>
                            <td className=" border border-red-500 text-right ">{dish.price} $</td>
                            <td className=" border border-red-500 rounded px-2 py-1 text-center "> <button onClick={()=>this.addToCart(dish)}>+</button> </td>
                        </tr>

                    </div>

                )
            });

            return (
                <div className="container">

                    <img src={this.props.menu[0].logo_url} alt="CrunchBites" class=" mx-auto w-48 h-auto " />
                    <h1 className=" text-center text-3xl font-bold pb-8">{this.props.menu[0].name}</h1>
                    <div className="grid grid-cols-2 px-8 mx-auto space-x-6">
                        <div>
                            <table id="menu" class="table-auto ">

                                {menu}

                            </table>
                        </div>
                        <div class="border p-4 shadow-sm rounded bg-red-100">
                            <h2 class="font-bold">Selected items:{this.getSelectedItem()} </h2>
                            <ul id="cart"></ul>

                            <h2 class="font-bold">Delivery Charges $10 </h2>
                            <h2 class="mt-6 font-bold">{this.getTotalCost()}</h2>
                            <p id="totalPrice"></p>
                        </div>

                    </div>

                </div>
            )

        }
        else return (<div>No menu available</div>)




    }
}


const mapStateToProps = ({ menu }) => {
    return { menu }
}
const mapActionsToProps = { fetchMenu };

export default connect(mapStateToProps, mapActionsToProps)(Menu);