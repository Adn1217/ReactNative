import {
  deleteDateFB,
  insertDateFB,
  selectDateByLocalIdFB,
  selectDateFB,
  selectDatesFB,
} from "../../db/firebase";
import { selectDates } from "../../db/sqlite";
import { dateListTypes } from "../types/dateList.types";

const { UPDATE_DATELIST } = dateListTypes;

export const selectDatesAction = () => {
  return async (dispatch) => {
    try {
      const dates = await selectDates();
      const dbDateList = await dates.rows._array;
      console.log("Citas recibidas: ", dbDateList);
      dispatch({
        type: UPDATE_DATELIST,
        dbDateList,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const insertDateToFB = (localId, text, selected, status, dateLocation) => {
  return async (dispatch) => {
    try {
      const insertedDateIdFB = await insertDateFB(localId, text, selected, status, dateLocation);
      const insertedDateFB = await selectDateFB(insertedDateIdFB.name);
      console.log("Cita ingresada en FB: ", insertedDateFB);
      const fbDates = await selectDatesFB();
      // console.log("Citas en FB: ", fbDates);
      dispatch({
        type: UPDATE_DATELIST,
        dbDateList: fbDates,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
};

export const deleteDateToFB = (localId) => {
  return async (dispatch) => {
    try {
      const dateToDeleteFB = await selectDateByLocalIdFB(localId);
      console.log("Cita encontrada en FB: ", dateToDeleteFB);
      // const dates = Object.keys(data).map((key) => ({ ...data[key], id: key }));
      const dateToDeleteName = Object.keys(dateToDeleteFB)[0];
      // console.log("Name : ", dateToDeleteName);
      const deletedDateFB = await deleteDateFB(dateToDeleteName);
      const fbDates = await selectDatesFB();
      console.log("Citas en FB: ", fbDates);
      dispatch({
        type: UPDATE_DATELIST,
        itemName: dateToDeleteName,
      });
      if (deletedDateFB) {
        console.log("Cita eliminada en FB correctamente.");
      } else {
        throw new Error("Se ha presentado error al eliminar cita en Firebase");
      }
    } catch (err) {
      console.error(err.message);
    }
  };
};
