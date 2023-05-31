import { workListTypes } from "../types/workList.types";

const { SELECT_WORKLIST_ITEM, SELECT_WORKLIST_BY_STATUS, SELECT_STATUS } = workListTypes;

export const selectItem = (id) => ({
    type: SELECT_WORKLIST_ITEM,
    workItemId: id,
})

export const selectWorkListByStatus = (status) => ({
    type: SELECT_WORKLIST_BY_STATUS,
    workListStatus: status,
})

export const selectStatus = (status) => ({
    type: SELECT_STATUS,
    workListStatus: status,
})