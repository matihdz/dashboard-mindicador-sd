import { getAllData, isTimeToUpdateData, setDashboardInfo } from "../../actions/api"
import { types } from "../../types/types";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
 
const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({})


const data = { test: 'test' };
describe('Pruebas en api-actions', () => {
  test('todas las acciones sincronas deben funcionar', () => {

    const error = 'error 404';
    const isTime = true;

    const setDashboardInfoACTION = setDashboardInfo(data, error);
    expect( setDashboardInfoACTION ).toEqual({
      type: types.setDashboardInfo,
      payload: {
        data,
        error,
      }
    }) 
    const isTimeToUpdateDataACTION = isTimeToUpdateData(isTime);
    expect( isTimeToUpdateDataACTION ).toEqual({
      type: types.isTimeToUpdateData,
      payload: {
        isTime
      }
    })
  })
  test('todas las acciones asincronas deben funcionar', async () => {
    const url = `https://mindicador.cl/api`;
    await store.dispatch( getAllData(url) )
  })
  
})