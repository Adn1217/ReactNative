import { pendingDate as InitialDateList } from "../../constants";
import { selectDates } from "../../db";

let InitialDBDateList = [];

async function selectDBDates() {
  const dates = await selectDates();
  InitialDBDateList = dates.rows.array;
  return dates.rows._array;
}

selectDBDates();
const initialState = {
  items: InitialDBDateList,
  state: null,
  selected: null,
};

const dateListReducer = (state = initialState, action) => {
  return state;
};

export default dateListReducer;
