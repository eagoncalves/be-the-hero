import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import herosImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';

import { FiLogIn } from 'react-icons/fi'

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={LogoImg} alt="Be the hero"/>
        <form>
          <h1>Faça o seu logon</h1>
          <input placeholder="Sua ID"/>
          <button type="submit" className="button">Entrar</button>
          <Link to='/register' className='back-link'>
            <FiLogIn size={16}  color="#E02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={herosImg} alt="Heroes"/>
    </div>
  );
} 
