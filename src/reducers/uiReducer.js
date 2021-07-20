import { types } from "../types/types";

export const uiReducer = (state = {}, action) => {
  switch(action.type) {
    case types.loadingScreen:
      return {
        ...state,
        loading: action.payload.loading
      }
    default:
      return state;
  }
}
