import {createStore,combineReducers} from 'redux';
import suggestions from './reducers/suggestions';
import results     from './reducers/results';
import currentItem from './reducers/currentItem';

const reducer = combineReducers({
    suggestions,
    results,
    currentItem
});


const store = createStore(reducer);

export default store;