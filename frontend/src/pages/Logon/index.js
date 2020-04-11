import React, { useState } from 'react';
import './styles.css';

import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import herosImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';

import { FiLogIn } from 'react-icons/fi'

export default function Logon() {

  const [id, setID] = useState();
  const history = useHistory();

  async function handleLogin(event){
    event.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('profile');
    } catch(err) {
      alert('Occoreu algum erro no momento do login, tente novamente.')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={LogoImg} alt="Be the hero"/>
        <form onSubmit={handleLogin}>
          <h1>Faça o seu logon</h1>
          <input 
            placeholder="Sua ID"
            value={id}
            onChange={event => setID(event.target.value)}
          />
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
