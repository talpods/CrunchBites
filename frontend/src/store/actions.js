export const fetchOrders=(item)=>{
    return {
        type: 'FETCH_ORDERS',
        payload: item}

}
export const fetchRestaurants=(item)=>{
    return {
        type: 'FETCH_RESTAURANTS',
        payload: item}

}
export const fetchMenu=(id)=>{
    return {
        type: 'FETCH_MENU',
        payload: id}

}