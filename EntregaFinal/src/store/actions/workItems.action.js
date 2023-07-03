import { selectWorks } from "../../db/sqlite";
import { workListTypes } from "../types/workList.types";

const { SELECT_WORKLIST_ITEM, SELECT_WORKLIST_BY_STATUS, SELECT_STATUS, UPDATE_WORKLIST } =
  workListTypes;

export const selectItem = (id) => ({
  type: SELECT_WORKLIST_ITEM,
  workItemId: id,
});

export const selectWorkListByStatus = (status) => ({
  type: SELECT_WORKLIST_BY_STATUS,
  workListStatus: status,
});

export const selectStatus = (status) => ({
  type: SELECT_STATUS,
  workListStatus: status,
});

export const updateWorkList = (newWorkList) => ({
  type: UPDATE_WORKLIST,
  newWorkList,
});

export const selectWorksAction = () => {
  return async (dispatch) => {
    try {
      const workList = await selectWorks();
      const dbWorkList = await workList.rows._array;
      dispatch({
        type: UPDATE_WORKLIST,
        newWorkList: dbWorkList,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
};
