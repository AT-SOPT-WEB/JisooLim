/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const headerContainer = (theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 3rem 0;
  background-color: ${theme.colors.green02};
  color: ${theme.colors.white};

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

export const btn = (theme) => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 1rem;
  background-color: ${theme.colors.green02};
  color: ${theme.colors.white};
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.colors.green01};
  }
`;

export const activeBtn = (theme) => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 1rem;
  background-color: ${theme.colors.green01};
  color: ${theme.colors.white};
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.colors.green01};
  }
`;
