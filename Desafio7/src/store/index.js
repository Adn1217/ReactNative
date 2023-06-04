import { createStore, combineReducers } from 'redux';
import { workListReducer, dateListReducer } from './reducers';

const rootReducer = combineReducers({
    workList: workListReducer,
    dateList: dateListReducer});

export default createStore(rootReducer);