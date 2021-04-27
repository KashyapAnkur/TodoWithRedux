import {createStore} from 'redux';
import Todoreducer from '../reducers/Todoreducer';
const store = createStore(Todoreducer);
export default store;