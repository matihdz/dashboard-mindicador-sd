import { types } from "../../types/types"


describe('Pruebas con los types de redux', () => {
  test('Deben ser igual a estos types', () => {
    expect( types ).toEqual({
      getAllData: '[API] Get all current data',
      setDashboardInfo: '[API] Set updated information on the dashboard',
      isTimeToUpdateData: '[API] Update the data by fetching per hour',
      loadingScreen: '[UI] Set on/off loading state app',
    })
  })
})