import React from 'react';
import { useSelector } from 'react-redux';

/* 
if(!!data) {
  const {
    libra_cobre, 
    tasa_desempleo,
    imacec,
    euro,
    dolar,
    dolar_intercambio,
    uf,
    utm,
    bitcoin
  } = data;
}
*/

export const ListInformationContainers = () => {
  const { data } = useSelector(state => state.api);
  

  return (
    <div>
      
    </div>
  )
}
