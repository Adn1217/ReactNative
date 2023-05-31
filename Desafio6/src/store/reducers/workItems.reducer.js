import { pendingWork as InitialWorkList } from "../../constants";
import { workListTypes } from "../types/workList.types";

const { SELECT_WORKLIST_ITEM, SELECT_WORKLIST_BY_STATUS, SELECT_STATUS } = workListTypes;

const initialState = {
    items: InitialWorkList,
    selectedStatus: 'Pending',
    selected: null
};

const workListReducer = (state = initialState, action ) => {

    switch(action.type){

        case  SELECT_WORKLIST_ITEM:
            const workListItemIndex = state.items.findIndex((workItem) => workItem.id === action.workItemId);
            if (workListItemIndex < 0){
                return state;
            }
            return state.items[workListItemIndex]

        case  SELECT_WORKLIST_BY_STATUS:
            const workListByStatus = state.items.filter((workItem) => workItem.status === action.workListStatus);
            return {...state, ...{items: workListByStatus, status: action.workListStatus}};
        
        case  SELECT_STATUS:
            const newStatus = action.workListStatus;
            return {...state, ...{selectedStatus: newStatus}};
            
    default:
        return state;
    }
}

export default workListReducer;