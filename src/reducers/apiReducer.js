import { types } from "../types/types";


export const apiReducer = (state = {}, action) => {
  switch( action.type ) {
    case types.setDashboardInfo:
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
      }
    default:
      return state;
  }
}