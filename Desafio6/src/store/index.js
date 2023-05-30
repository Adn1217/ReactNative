import { createStore, combineReducers } from 'redux';
import { workListReducer } from './reducers';

const rootReducer = combineReducers({
    workList: workListReducer});

export default createStore(rootReducer);