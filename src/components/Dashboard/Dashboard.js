import React from 'react'
import { useSelector } from 'react-redux';
import { DashboardError } from '../DashboardError/DashboardError';
import { ListInformationContainers } from '../ListInformationContainers.js/ListInformationContainers';

export const Dashboard = () => {
  const { error } = useSelector(state => state.api);

  return (
    <div>
      {
        (error)
        ? <DashboardError error={error}/>
        : <ListInformationContainers/>
      }
    </div>
  )
}