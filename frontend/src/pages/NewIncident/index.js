import React, { useState } from 'react';
import './stylesc.css';

import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import LogoImg from '../../assets/logo.svg';

import api from '../../services/api';

function NewIncient(){
  const [title, setTitle] =  useState('');
  const [description, setDescription] =  useState('');
  const [value, setValue] =  useState('');

  const ongId = localStorage.getItem('ongId');
  const history =  useHistory();

  async function handlerNewIncident(event){
    event.preventDefault();
    const data  = {
      title,
      description,
      value
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      }).then(() => history.push('/profile'));
    } catch (err) {
      alert('Não foi possível realizar o cadastro do novo caso');
    }
  }

  return (
    <div className="new-incident-container">
    <div className="content">
      <section>
        <img src={LogoImg} alt="Be the hero"/>
        <h1>Cadastrar novo caso</h1>
        <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

         <Link className="back-link" to='/profile'>
          <FiArrowLeft size={16}  color="#E02041"/>
          Voltar para o ínicio
        </Link>
      </section>

      <form onSubmit={handlerNewIncident}>

        <input 
          placeholder="Título do caso"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <textarea 
          placeholder="Descrição"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <input 
          placeholder="Valor em reais"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        
        <button className="button" type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
  );
}

export default NewIncient;