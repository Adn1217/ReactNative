import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { workListReducer, dateListReducer } from './reducers';

const rootReducer = combineReducers({
    workList: workListReducer,
    dateList: dateListReducer});

export default createStore(rootReducer, applyMiddleware(thunk));