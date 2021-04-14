import axios from 'axios';
class MenuController{
    static async get(id){
    let {data}= await axios.get('http://127.0.0.1:3000/menu/'+id);
    return data;
    }
}
export default MenuController;