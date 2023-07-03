import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { workListReducer, dateListReducer, authReducer } from "./reducers";

const rootReducer = combineReducers({
  workList: workListReducer,
  dateList: dateListReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
