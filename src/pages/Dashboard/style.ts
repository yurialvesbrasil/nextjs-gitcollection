import styled, { css } from 'styled-components';
import { shade } from 'polished'; //Biblioteca para dar efeitos em cores

interface FormProps {
  hasError: boolean;
}

// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3a;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 160px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repos = styled.div`
  margin-top: 80px;
  max-width: 700px;

  .delete-icon {
    margin-top: 10px;
  }

  .button-delete {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 4px;
    align-content: flex-center;
    margin-bottom: 4px;
    margin-top: 4px;
    color: #3d3d4d;

    div {
      display: flex;
      align-items: flex-start;
      border: #a8a8b3 solid 1px;
      border-radius: 8px;
      padding: 4px;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        background-color: #fff;
      }

      span {
        margin-top: 2px;
        height: 100%;
        font-size: 0.9rem;
      }
    }
  }

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(6px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
