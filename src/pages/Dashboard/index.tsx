import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Title, Form, Repos, Error } from './style';
import logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface GithubReposiroty {
  node_id: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export const Dasboard: React.FC = () => {
  /* Armazena a lista de repositórios */
  const [repos, setRepos] = useState<GithubReposiroty[]>(() => {
    /* Recupera dados do localStorage caso exista*/
    const storangeRepos = localStorage.getItem('@GitCollection:repositories');
    if (storangeRepos) {
      return JSON.parse(storangeRepos);
    }
    return [];
  });
  /* Armazena valor que está no input */
  const [newRepo, setNewRepo] = useState('');
  /* Armazena mensagem de erro */
  const [inputError, setInputError] = useState('');

  /* Toda vez que repos for modificado ele é armazenado no localStorange*/
  useEffect(() => {
    localStorage.setItem('@GitCollection:repositories', JSON.stringify(repos));
  }, [repos]);

  /* Evento para armazenar valor do input */
  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setNewRepo(event.target.value);
    setInputError('');
  }

  async function handleAddRepo(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Informe o username/repositório');
      return;
    }

    const response = await api.get<GithubReposiroty>(`repos/${newRepo}`);
    const repository = response.data;
    setRepos([...repos, repository]);
    setNewRepo('');
  }

  return (
    <>
      <img src={logo} alt="Logo da aplicação" />
      <Title>Catálogo de Repositórios do Github</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepo}>
        <input
          placeholder="username/repository_name"
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repos>
        {repos.map(repository => (
          <Link
            to={`/repositories/${repository.full_name}`}
            key={repository.node_id}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repos>
    </>
  );
};
