import React from 'react';
import { Title, Form, Repos } from './style';
import logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

export const Dasboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logo da aplicação" />
      <Title>Catálogo de Repositórios do Github</Title>

      <Form>
        <input placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>

      <Repos>
        <a href="/repositories">
          <img
            src="https://avatars.githubusercontent.com/u/6756311?v=4"
            alt="Repositorio"
          />
          <div>
            <strong>yurialvesbrasil/mini-curso</strong>
            <p>Descrição completa do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repos>
    </>
  );
};
