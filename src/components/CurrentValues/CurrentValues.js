import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercentage, faDollarSign } from '@fortawesome/free-solid-svg-icons'

export const CurrentValues = ({indicator}) => {

  return (
    <div className="w-25 p-1" style={{minWidth: '10rem'}}>
    {
      (indicator) &&
      <div className="card text-center">
          <p className="card-title">{indicator.nombre}</p>
          <div className="card-footer">
          {
            (indicator.unidad_medida === 'Porcentaje') &&
            <div>
              {(indicator.valor) + ' '}
              <FontAwesomeIcon icon={faPercentage}/>
            </div>
          }
          {
            (indicator.unidad_medida === 'Dólar' || indicator.unidad_medida === 'Pesos') &&
            <div>
              <FontAwesomeIcon icon={faDollarSign}/>
              {' ' + indicator.valor} {indicator.unidad_medida}
            </div>
          }
          </div>
        </div>
    }  
    </div>
  )
}
