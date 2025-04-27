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

export const cardStyle = (theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  margin-top: 3rem;
  padding: 2rem;
  text-align: center;
  background-color: ${theme.colors.green02};
  border-radius: 2rem;
`;

export const closeButton = css`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

export const profileImg = (theme) => css`
  width: 15rem;
  height: 15rem;
  margin-top: 6rem;
  border: 0.5rem solid ${theme.colors.green03};
  border-radius: 50%;
  object-fit: cover;
`;

export const profileLink = (theme) => css`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;

  &:hover {
    color: ${theme.colors.green03};
  }
`;

export const username = css`
  font-size: 2rem;
  font-weight: bold;
`;

export const nickname = css`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const followStyle = css`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 3rem;
  margin-top: 4rem;
`;

export const followBox = (theme) => css`
  flex: 1;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ${theme.colors.green01};
  border-radius: 2rem;
  color: ${theme.colors.white};

  & > dt {
    font-size: 1.5rem;
  }

  & > dd {
    font-weight: bold;
    font-size: 1.8rem;
    margin: 0;
  }
`;
