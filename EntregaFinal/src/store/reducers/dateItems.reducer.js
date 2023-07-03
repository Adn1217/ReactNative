import { dateListTypes } from "../types/dateList.types";

const InitialDBDateList = [];
const { UPDATE_DATELIST } = dateListTypes;

const initialState = {
  items: InitialDBDateList,
  state: null,
  selected: null,
};

const dateListReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATELIST:
      return { ...state, items: action.dbDateList };
    default:
      return state;
  }
};

export default dateListReducer;
