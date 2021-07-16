/* eslint-disable prettier/prettier */
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header } from './style';
import logo from '../../assets/logo.svg';
import { FiChevronLeft } from 'react-icons/fi';

interface RepositoryParams {
  full_name: string;
}

export const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="Logo do repositório" />
        <Link to="/"> <FiChevronLeft size={20} />Voltar</Link>
      </Header>
      <h1>Repo: {params.full_name}</h1>
    </>
  );
};
