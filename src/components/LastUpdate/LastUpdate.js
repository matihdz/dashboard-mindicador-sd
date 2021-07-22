import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

export const LastUpdate = () => {
  const [lastUpdate, setLastUpdate] = useState(0)
  const { data, isTime } = useSelector(state => state.api);

  useEffect(() => {
    if(data){
      const intervalId = setInterval( () => {
        let currentMoment = new Date();
        currentMoment.setMinutes(currentMoment.getMinutes() + 1)
        setLastUpdate(currentMoment.getMinutes())
      }, 60000)
      return () => {
        clearInterval(intervalId);
        setLastUpdate(0)
      }
    }
  }, [data, setLastUpdate, isTime])

  return (
    <div>
      <p className="text-white-50 ml-5 text-center">
        <FontAwesomeIcon icon={faRedo}/>
        {' Última actualización hace'}  
        {
          (lastUpdate === 1) ? ' ' + (lastUpdate) + ' minuto' : ' ' + (lastUpdate) + ' minutos'
        }
      </p> 
    </div>
  )
}
