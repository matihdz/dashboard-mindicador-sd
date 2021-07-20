import { types } from "../types/types"

export const setLoadingStateOfUI = (loading) => ({
  type: types.loadingScreen,
  payload: {
    loading
  }
})