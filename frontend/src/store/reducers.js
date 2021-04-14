

export const restaurantsReducer = (state = { orders: [], restaurants:[], menu:[] }, action) => {
    if (action.type == 'FETCH_ORDERS') {
       
            return {...state, orders: action.payload };
       

    }
    if (action.type == 'FETCH_RESTAURANTS') {
       
        return {...state, restaurants: action.payload };
   

}
if (action.type == 'FETCH_MENU') {
       
    return {...state, menu: action.payload };


}
    return state;
}