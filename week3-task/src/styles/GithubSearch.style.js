/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 7rem;
`;

// 검색창
export const searchBox = (theme) => css`
  width: 60rem;
  padding: 2rem;
  border: 0.2rem solid ${theme.colors.green01};
  border-radius: 32px;
  background-color: ${theme.colors.green03};
  margin-bottom: 2rem;
`;

// 검색 결과 카드
export const cardStyle = (theme) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  margin-top: 2rem;
  padding: 2rem;
  text-align: center;
  background-color: ${theme.colors.green02};
  border-radius: 32px;
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

// 최근 검색어
export const recentSearchContainer = css`
  width: 64rem;

  margin-bottom: 2rem;
`;

export const recentSearchTitle = css`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const recentSearchList = css`
  display: flex;
  gap: 1rem;
`;

export const recentSearchItem = (theme) => css`
  display: flex;
  align-items: center;
  border: 1.5px solid ${theme.colors.green01};
  border-radius: 24px;
  padding: 0.3rem 2rem;
  font-size: 1.6rem;
  background: none;
  color: inherit;
  cursor: pointer;
  white-space: nowrap;
`;

export const deleteButton = (theme) => css`
  background: none;
  border: none;
  font-size: 3rem;
  cursor: pointer;
  color: ${theme.colors.red};
  margin-left: 1rem;
  padding: 0;
  line-height: 1;
`;

export const spinner = (theme) => css`
  margin-top: 4rem;
  border: 8px solid ${theme.colors.gray};
  border-top: 8px solid ${theme.colors.green01};
  border-radius: 50%;
  width: 3.75rem;
  height: 3.75rem;
  animation: spin 0.7s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const errorMessage = (theme) => css`
  margin-top: 4rem;
  color: ${theme.colors.red};
  font-size: 2rem;
  font-weight: bold;
`;
