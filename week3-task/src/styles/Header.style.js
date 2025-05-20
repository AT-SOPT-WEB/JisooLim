/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const headerContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.green02};
  color: ${({ theme }) => theme.colors.white};

  & > div {
    font-size: 3rem;
    font-weight: bold;
  }
`;

export const buttonGroup = css`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const baseBtn = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const btn = css`
  ${baseBtn};
  background-color: ${({ theme }) => theme.colors.green02};

  &:hover {
    background-color: ${({ theme }) => theme.colors.green01};
  }
`;

export const activeBtn = css`
  ${baseBtn};
  background-color: ${({ theme }) => theme.colors.green01};

  &:hover {
    background-color: ${({ theme }) => theme.colors.green01};
  }
`;
