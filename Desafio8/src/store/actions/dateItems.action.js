import { selectDates } from "../../db/sqlite";
import { dateListTypes } from "../types/dateList.types";

const { GET_DATELIST } = dateListTypes;

export const selectDatesAction = () => {
  return async (dispatch) => {
    try {
      const dates = await selectDates();
      const dbDateList = await dates.rows.array;
      console.log("Citas recibidas: ", dbDateList);
      dispatch({
        type: GET_DATELIST,
        dbDateList,
      });
    } catch (err) {
      console.err(err.message);
    }
  };
};
