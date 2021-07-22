import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faInfo, faNewspaper, faTasks, faUser } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = () => {
  return (
    <div className="text-center text-white-50 bg-secondary rounded p-2 h-100" style={{width: '15rem'}}>
      <h2 className="pb-5 border-bottom border-2 border-dark text-dark">Navegación</h2>
      <ul className="navbar-nav">
        <li className="mb-2">
          <button className="text-start btn btn-dark w-100">
            <FontAwesomeIcon icon={faUser}/>
            <span className=""> CLIENTES</span>
          </button>
        </li>
        <li className="mb-2">
          <button className="text-start btn btn-dark w-100">
            <FontAwesomeIcon icon={faInfo}/>
            <span className=""> INFORMACIÓN</span>
          </button>
        </li>        <li className="mb-2">
          <button className="text-start btn btn-dark w-100">
            <FontAwesomeIcon icon={faTasks}/>
            <span className=""> TAREAS</span>
          </button>
        </li>        <li className="mb-2">
          <button className="text-start btn btn-dark w-100">
            <FontAwesomeIcon icon={faCoins}/>
            <span className=""> VALORES FRECUENTES</span>
          </button>
        </li>        <li className="mb-2">
          <button className="text-start btn btn-dark w-100">
            <FontAwesomeIcon icon={faNewspaper}/>
            <span className=""> NOTIFICACIONES</span>
          </button>
        </li>
      </ul>
    </div>
  )
}