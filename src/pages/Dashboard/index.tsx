import React from 'react';
import { Title, Form } from './style';
import logo from '../../assets/logo.svg';

export const Dasboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logo da aplicação" />
      <Title>Catálogo de Repositórios do Github</Title>
      <Form>
        <input placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>
    </>
  );
};
