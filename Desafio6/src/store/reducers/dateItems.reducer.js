import { pendingDate as InitialDateList } from "../../constants";

const initialState = {
    items: InitialDateList,
    state: null,
    selected: null
};

const dateListReducer = (state = initialState, action ) => {
    return state;
}

export default dateListReducer;