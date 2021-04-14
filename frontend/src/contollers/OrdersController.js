import axios from 'axios';
class OrdersController{
    static async get(){
    let {data}= await axios.get('http://127.0.0.1:3000/Orders');
    return data;
    }
}
export default OrdersController;