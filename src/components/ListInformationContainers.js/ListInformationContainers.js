import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createGroupByUnits } from '../../helpers/createGroupByUnits';
import { DoughnutChart } from '../Charts/DoughnutChart';
import { CurrentValues } from '../CurrentValues/CurrentValues';

const unitTypes = ['Porcentaje', 'Dólar', 'Pesos']

export const ListInformationContainers = () => {
  const [groupsByUnit, setGroupsByUnit] = useState({})
  const { data } = useSelector(state => state.api);

  useEffect(() => {
    if(data){
      setGroupsByUnit(createGroupByUnits( data, unitTypes ));
    }
  }, [data])

  return (
    <>
      {
        (data) &&    
        <div className="row row-cols-1 gap-3">
          <div className="col bg-secondary p-2 border border-2 border-secondary container rounded w-75">
            <h2 className="text-dark  h5 pb-2 border-bottom fw-bold border-2 border-dark fw-bold">VALORES ACTUALES</h2>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
              <CurrentValues indicator={data.libra_cobre}/>
              <CurrentValues indicator={data.tasa_desempleo}/>
              <CurrentValues indicator={data.imacec}/>
              <CurrentValues indicator={data.euro}/>
              <CurrentValues indicator={data.dolar}/>
              <CurrentValues indicator={data.dolar_intercambio}/>
              <CurrentValues indicator={data.uf}/>
              <CurrentValues indicator={data.utm}/>
              <CurrentValues indicator={data.bitcoin}/>
            </div>
          </div>
          <div className="col bg-secondary p-2 border border-2 border-secondary container rounded w-75">
            <h2 className="text-dark h5 pb-2 border-bottom fw-bold border-2 border-dark fw-bold">GRAF. POR UNIDAD DE MEDIDA</h2>
            <div className="d-flex justify-content-evenly align-items-center flex-wrap">
              <DoughnutChart groupUnitType={unitTypes[0]} groupData={groupsByUnit.percent}/>
              <DoughnutChart groupUnitType={unitTypes[1]} groupData={groupsByUnit.dollar}/>
              <DoughnutChart groupUnitType={unitTypes[2]} groupData={groupsByUnit.pesos}/>
            </div>
          </div>
        </div>
      }
    </>
  )
}
