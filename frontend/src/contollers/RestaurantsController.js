import axios from 'axios';
class RestaurantsController{
    static async get(){
    let {data}= await axios.get('http://127.0.0.1:3000/Restaurants');
    return data;
    }
}
export default RestaurantsController;