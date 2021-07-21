import { types } from "../types/types";
import { setLoadingStateOfUI } from "./ui";

export const getAllData = ( url ) => {
  return async ( dispatch ) => {
    try {
      dispatch( setLoadingStateOfUI(true) );

      const res = await fetch(url);
      const data = await res.json();

      dispatch( setDashboardInfo( data, null) );
      dispatch( setLoadingStateOfUI(false) );
    } catch (err) {
      dispatch( setDashboardInfo( null, err) );
      dispatch( setLoadingStateOfUI(false) );     
    }
  }
}

export const isTimeToUpdateData = (isTime) => ({
  type: types.isTimeToUpdateData,
  payload: {
    isTime,
  }
})

const setDashboardInfo = (data, error) => ({
  type: types.setDashboardInfo,
  payload: {
    data,
    error,
  }
})