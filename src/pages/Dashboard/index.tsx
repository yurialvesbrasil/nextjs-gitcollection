import React from 'react';
import { Title } from './style';
import logo from '../../assets/logo.svg';

export const Dasboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logo da aplicação" />
      <Title>Dasboard</Title>
    </>
  );
};
