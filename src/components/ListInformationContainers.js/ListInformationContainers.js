import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createGroupByUnits } from '../../helpers/createGroupByUnits';
import { GroupedVerticalBar } from '../Charts/GroupedVerticalBar';
import { CurrentValues } from '../CurrentValues/CurrentValues';

const unitTypes = ['Porcentaje', 'Dólar', 'Pesos']

export const ListInformationContainers = () => {
  const [state, setstate] = useState()
  const { data } = useSelector(state => state.api);
  if(data) {
    console.log(createGroupByUnits( data, unitTypes )) 
  }
  return (
    <>
      {
        (data) &&    
        <div>
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
          <div>
            {/* <GroupedVerticalBar groupUnitType={} groupData={}/> */}
          </div>
        </div>
      }
    </>
  )
}
