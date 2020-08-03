import React from 'react';
import Logo from '../../assets/images/Logo.png'
import Button from '../Button'
import './Menu.css'

function Menu() {
  return (
    <nav className="Menu">
      <a href='/'>
      <img className='Logo' src={Logo} alt="logo" />
      </a>
      <Button as="a" className="ButtonLink" href="/">Novo Vídeo</Button>
    </nav>
  )
}

export default Menu;