/* eslint-disable prettier/prettier */
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header, RepoInfo, Issues } from './style';
import logo from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface RepositoryParams {
  full_name: string;
}

export const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Logo do repositório" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>
      
      <RepoInfo>
        <header>
          <img src="" alt="Aluizo Developer" />
          <div>
            <strong>{params.full_name}</strong>
            <p>Repositorio do mini curso gratuito de reactjs</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>2330</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>210</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>79</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepoInfo>

      <Issues>
        <Link
            to={`/repositories`}
            key="aasdasdsad"
          >
            <div>
              <strong>79</strong>
              <p>Issues abertas</p>
            </div>
            <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};
