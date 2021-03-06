import styled from 'styled-components';

export const ReactModalPortal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  gap: 16px;

  span {
    color: #737380;
  }

  .titulo-modal {
    display: flex;
    flex-direction: row;
    align-items: left;
    width: 100%;

    h2 {
      margin-top: 12px;
      margin-left: 12px;
    }
  }

  .modal-footer {
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    gap: 8px;

    .modal-button-sim {
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background-color: #e73f5d;
      color: #fff;
      padding: 0 32px;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      border: 0;

      transition: filter 0.2s;

      img {
        margin-right: 8px;
      }

      &.outLined {
        background-color: #fff;
        border: 1px solid #e73f5d;
        color: #e73f5d;
      }

      &:not(:disabled):hover {
        filter: brightness(0.9);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .modal-button-close {
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background-color: #dbdcdd;
      color: #8d8d97;
      padding: 0 32px;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      border: 0;

      transition: filter 0.2s;

      img {
        margin-right: 8px;
      }

      &.outLined {
        background-color: #fff;
        border: 1px solid #dbdcdd;
        color: #dbdcdd;
      }

      &:not(:disabled):hover {
        filter: brightness(0.9);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }
`;
