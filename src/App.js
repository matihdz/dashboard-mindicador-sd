import React, { useEffect } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData, isTimeToUpdateData } from './actions/api';
import { Sidebar } from './components/Sidebar/Sidebar';

const anHourInMiliseconds = 3600000;

export const App = () => {
  const dispatch = useDispatch();
  const { isTime } = useSelector(state => state.api)
  const url = `https://mindicador.cl/api`;

  useEffect(() => {
    dispatch( getAllData(url) );
    const intervalId = setInterval( () => {
      dispatch( isTimeToUpdateData( true ) );
    }, anHourInMiliseconds)
    dispatch( isTimeToUpdateData( false ) );
    return () => clearInterval(intervalId)
  }, [url, dispatch, isTime])

  const { loading } = useSelector(state => state.ui);
  return (
    <div className="bg-dark vh-100 row">
      <section className="col-2 d-xl-block d-none">
        <Sidebar/>
      </section>
      <section className="col-xl-10 col-12">
        {
          (loading)
          ? <p>Cargando...</p>
          : <Dashboard/>
        }
      </section>
    </div>
  )
}
