import React, { useState } from 'react';
import { Title, Form, Repos } from './style';
import logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';

interface GithubReposiroty {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export const Dasboard: React.FC = () => {
  const [repos, setRepos] = useState<GithubReposiroty[]>([]);

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
            <strong>yurialvesbrasil/flutter_duolingo</strong>
            <p>Descrição completa do repositório</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repos>
    </>
  );
};
