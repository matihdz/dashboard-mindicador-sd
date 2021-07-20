import React, { useEffect } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from './actions/api';

export const App = () => {
  const dispatch = useDispatch();
  const url = `https://mindicador.cl/api`;

  useEffect(() => {
    dispatch( getAllData(url) );
  }, [url, dispatch])

  const { loading } = useSelector(state => state.ui);
  return (
    <div>
      <section>
        {
          (loading)
          ? <p>Cargando...</p>
          : <Dashboard/>
        }
      </section>
    </div>
  )
}
