import React from 'react';
import { Chart, Doughnut } from 'react-chartjs-2';

Chart.defaults.font.weight = 'bold'
Chart.defaults.font.size = 13
Chart.defaults.color = 'rgb(255,255,255,.5)';
export const DoughnutChart = ({groupUnitType, groupData}) => {
  const dataChart = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [],
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  if(groupData){
    groupData.forEach( elem => {
      Object.values( elem ).forEach( info => {
        dataChart.labels.push( info.nombre )
        dataChart.datasets[0].data.push( info.valor )
      })
    })
  }

  return (
    <>
      <div className="text-center mw-100" style={{width: '20rem'}}>
        <h2 className="h5 fw-bold">{groupUnitType.toUpperCase()}</h2>
        <div className="bg-dark rounded shadow-sm p-3">
          <Doughnut data={dataChart} />
        </div>
      </div>
    </>
  )
}