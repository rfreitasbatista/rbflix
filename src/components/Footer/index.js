import React from 'react';
import { Link } from 'react-router-dom';
import { FooterBase } from './styles';
import Logo from '../../assets/images/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img src={Logo} alt="Logo Alura" style={{ maxWidth: '105px' }} />
      </Link>
      <p>
        Criado durante a
        {' '}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
