/* eslint-disable prettier/prettier */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Title, Form, Repos } from './style';
import logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';

interface GithubReposiroty {
  node_id: string,
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export const Dasboard: React.FC = () => {
  /* Armazena a lista de repositórios */
  const [repos, setRepos] = useState<GithubReposiroty[]>([]);
  /* Armazena valor que está no input */
  const [newRepo, setNewRepo] = useState('');

  /* Evento para armazenar valor do input */
  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void{
    setNewRepo(event.target.value);
  }

  async function handleAddRepo(event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault();
    const response = await api.get<GithubReposiroty>(`repos/${newRepo}`);
    const repository = response.data;
    setRepos([...repos, repository]);
    setNewRepo('');
  }

  return (
    <>
      <img src={logo} alt="Logo da aplicação" />
      <Title>Catálogo de Repositórios do Github</Title>

      <Form onSubmit={handleAddRepo}>
        <input placeholder="username/repository_name" onChange={handleInputChange} />
        <button type="submit">Buscar</button>
      </Form>

      <Repos>
        {repos.map(repository => (
            <a href="/repositories" key={repository.node_id}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>          
        ))}
      </Repos>
    </>
  );
};
