import React from 'react';
import './styles.css';

import LogoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

function Profile () {
  return (
    <div className="profile-container">
      <header>
        <img src={LogoImg} alt="Be the hero"/>
        <span>Bem vinda a, ADEP</span>

        <Link className="button" to='/incidents/new'>Cadastar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041"/>
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Casos teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição Teste</p>

          <strong>VALOR:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>

             <li>
          <strong>CASO:</strong>
          <p>Casos teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição Teste</p>

          <strong>VALOR:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>

             <li>
          <strong>CASO:</strong>
          <p>Casos teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição Teste</p>

          <strong>VALOR:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>

             <li>
          <strong>CASO:</strong>
          <p>Casos teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição Teste</p>

          <strong>VALOR:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"/>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Profile;