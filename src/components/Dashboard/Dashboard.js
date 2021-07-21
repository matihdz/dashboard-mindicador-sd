import React from 'react'
import { useSelector } from 'react-redux';
import { DashboardError } from '../DashboardError/DashboardError';
import { LastUpdate } from '../LastUpdate/LastUpdate';
import { ListInformationContainers } from '../ListInformationContainers.js/ListInformationContainers';

export const Dashboard = () => {
  const { error } = useSelector(state => state.api);
  return (
    <div>
      <h2 className="text-white-50 mt-3 text-center">Tablero</h2>
      <LastUpdate/>
      {
        (error)
        ? <DashboardError error={error}/>
        : <ListInformationContainers/>
      }
    </div>
  )
}
