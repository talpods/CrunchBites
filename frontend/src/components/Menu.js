import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchMenu } from '../store/actions'
import MenuController from '../contollers/MenuController'

export class Menu extends Component {
    constructor(props) {
        super(props)
    }
    async componentDidMount() {
     await MenuController.get();
   this.props.fetchMenu(this.props.match.params.id);
    }

    render() {
    
        
        return (
            <div>
                <img src="img/kfc-3.png" alt="CrunchBites" class=" mx-auto " />
                <h1 className=" text-center text-3xl font-bold pb-8">name</h1>


                <div className="grid grid-cols-2 px-8 mx-auto space-x-6">
                    <div>
                        <table id="menu" class="table-auto  border-collapse border border-red-500">
                        </table>
                    </div>
                    <div class="border p-4 shadow-sm rounded bg-red-100">
                        <h2 class="font-bold">Selected items</h2>
                        <ul id="cart"></ul>

                        <h2 class="font-bold">Delivery Charges $10 </h2>
                        <h2 class="mt-6 font-bold">Total price</h2>
                        <p id="totalPrice"></p>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ menu }) => {
    return { menu }
}
const mapActionsToProps = {fetchMenu};

export default connect(mapStateToProps, mapActionsToProps)(Menu);

