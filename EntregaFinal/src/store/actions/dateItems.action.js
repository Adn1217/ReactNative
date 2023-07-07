import { deleteDateFB, insertDateFB, selectDateByLocalIdFB } from "../../db/firebase";
import { selectDates } from "../../db/sqlite";
import { dateListTypes } from "../types/dateList.types";

const { UPDATE_DATELIST } = dateListTypes;

export const selectDatesAction = () => {
  return async (dispatch) => {
    try {
      const dates = await selectDates();
      const dbDateList = await dates.rows._array;
      dispatch({
        type: UPDATE_DATELIST,
        dbDateList,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const insertDateToFB = (localId, text, selected, status, dateLocation, token) => {
  return async (dispatch) => {
    try {
      await insertDateFB(localId, text, selected, status, dateLocation, token);
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const deleteDateToFB = (localId, token) => {
  return async (dispatch) => {
    try {
      const dateToDeleteFB = await selectDateByLocalIdFB(localId, token);
      const dateToDeleteName = Object.keys(dateToDeleteFB)[0];
      const deletedDateFB = await deleteDateFB(dateToDeleteName, token);
      if (deletedDateFB) {
        console.log("Cita eliminada en FB correctamente.");
      } else {
        console.error("Se ha presentado error al eliminar cita en Firebase");
      }
    } catch (err) {
      console.error(err.message);
    }
  };
};
