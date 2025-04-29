/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 7rem;
`;

export const searchBox = (theme) => css`
  width: 60rem;
  padding: 2rem;
  border: 0.2rem solid ${theme.colors.green01};
  border-radius: 2rem;
  background-color: ${theme.colors.green03};
`;

export const errorText = (theme) => css`
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.colors.green01};
  margin-top: 3rem;
`;

export const historyList = css`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const historyCard = (theme) => css`
  width: 60rem;
  padding: 1.2rem 2rem;
  border: 0.2rem solid ${theme.colors.green01};
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
  background: #fff;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.03);

  & > .dash {
    margin: 0 1rem;
  }
`;

