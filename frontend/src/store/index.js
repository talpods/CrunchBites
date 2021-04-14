import {createStore} from 'redux';
import {restaurantsReducer} from './reducers';

const store = createStore(restaurantsReducer);

export default store;