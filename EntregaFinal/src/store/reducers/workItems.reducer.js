import { workListTypes } from "../types/workList.types";

const { SELECT_WORKLIST_ITEM, SELECT_WORKLIST_BY_STATUS, SELECT_STATUS, UPDATE_WORKLIST } =
  workListTypes;

const InitialWorkList = [];
const initialState = {
  items: InitialWorkList,
  selectedStatus: "Pending",
  filteredItems: InitialWorkList.filter((item) => (item.status = "Pending")),
  selected: null,
};

const workListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_WORKLIST_ITEM:
      // eslint-disable-next-line no-case-declarations
      const workListItemIndex = state.items.findIndex(
        (workItem) => workItem.id === action.workItemId
      );
      if (workListItemIndex < 0) {
        return state;
      }
      return state.items[workListItemIndex];

    case SELECT_WORKLIST_BY_STATUS:
      // eslint-disable-next-line no-case-declarations
      const workListByStatus =
        state.items?.filter((workItem) => workItem.status === action.workListStatus) || [];
      return { ...state, ...{ filteredItems: workListByStatus, status: action.workListStatus } };

    case SELECT_STATUS:
      // eslint-disable-next-line no-case-declarations
      const newStatus = action.workListStatus;
      return { ...state, ...{ selectedStatus: newStatus } };

    case UPDATE_WORKLIST:
      // eslint-disable-next-line no-case-declarations
      const newWorkList = action.newWorkList;
      return { ...state, ...{ items: newWorkList } };

    default:
      return state;
  }
};

export default workListReducer;
