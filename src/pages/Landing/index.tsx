import React from 'react'
import Search from '@material-ui/icons/Search'
import PermContactCalendar from '@material-ui/icons/PermContactCalendar'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/Logo_IPElab.png'

import './styles.css'

function Landing() {
  return (
    <div id='page-landing'>
      <div id='page-landing-content' className='container'>
        <div className='logo-container'>
          <img src={logoImg} alt='' className='logo-img' />

          <h2 className='descricao'>
            Ideias, Prototipagem e Empreendedorismo{' '}
          </h2>
        </div>
        <div className='buttons-container'>
          <Link to='/cadastrar' className='register'>
            <PermContactCalendar style={{ fontSize: 32 }} />
            Registrar
          </Link>
          <Link to='/buscar' className='search'>
            <Search style={{ fontSize: 32 }} />
            Buscar
          </Link>
        </div>
        <span className='total-connections'>
          Total de 200 conexões já realizadas
        </span>
      </div>
    </div>
  )
}

export default Landing
