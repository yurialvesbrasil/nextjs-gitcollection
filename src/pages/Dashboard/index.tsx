import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Title, Form, Repos, Error } from './style';
import logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import { api } from '../../services/api';
import { useEffect, useRef } from 'react';
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
  /* Cria referencia para limpar formulário */
  const formEl = useRef<HTMLFormElement | null>(null);

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

    try {
      //Verifica se já existe na lista local
      const found = repos.find(element => element.full_name === newRepo);
      if (found) {
        setInputError('Este username/repositório já existe em sua lista');
        return;
      }

      const response = await api.get<GithubReposiroty>(`repos/${newRepo}`);

      const repository = response.data;

      setRepos([...repos, repository]);
      formEl.current?.reset();
      setNewRepo('');
      setInputError('');
    } catch {
      setInputError('Informe o username/repositório existente no GitHub');
      return;
    }
  }

  return (
    <>
      <img src={logo} alt="Logo da aplicação" />
      <Title>Catálogo de Repositórios do Github</Title>

      <Form
        ref={formEl}
        hasError={Boolean(inputError)}
        onSubmit={handleAddRepo}
      >
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
