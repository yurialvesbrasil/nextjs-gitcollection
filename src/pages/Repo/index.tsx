/* eslint-disable prettier/prettier */
import { Link, useRouteMatch } from 'react-router-dom';
import { Header, RepoInfo, Issues } from './style';
import logo from '../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

interface RepositoryParams {
  full_name: string;
}


interface GithubReposiroty {
  node_id: string;
  full_name: string;
  description: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface GithubIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [ repository, setRepository ] = useState<GithubReposiroty | null>(null);
  const [ issues, setIssues ] = useState<GithubIssue[]>([]);

  useEffect(() => {
    api
    .get(`repos/${params.full_name}`)
    .then(response => setRepository(response.data));

    api
    .get(`repos/${params.full_name}/issues`)
    .then(response => setIssues(response.data));
  }, [params.full_name]);

  return (
    <>
      <Header>
        <img src={logo} alt="Logo do repositório" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </Header>
      
      {repository && (
        <RepoInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepoInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a href={issue.html_url} key={issue.id} >
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};


export default Repo;