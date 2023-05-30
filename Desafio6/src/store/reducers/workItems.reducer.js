import { pendingWork as InitialWorkList } from "../../constants";

const initialState = {
    items: InitialWorkList,
    state: null,
    selected: null
};

const workListReducer = (state = initialState, action ) => {
    return state;
}

export default workListReducer;