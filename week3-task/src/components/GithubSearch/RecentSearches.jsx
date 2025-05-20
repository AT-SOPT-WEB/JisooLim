import React from "react";
import * as S from "../../styles/GithubSearch.style";

const RecentSearches = ({ searches, onClick, onDelete, theme }) =>
  searches.length > 0 && (
    <div css={S.recentSearchContainer}>
      <div css={S.recentSearchTitle}>최근 검색어</div>
      <ul css={S.recentSearchList}>
        {searches.map((search) => (
          <li
            key={search}
            css={S.recentSearchItem(theme)}
            tabIndex={0}
            onClick={() => onClick(search)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onClick(search);
            }}
          >
            <span>{search}</span>
            <button
              type="button"
              css={S.deleteButton(theme)}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(search);
              }}
              aria-label={`${search} 검색어 삭제`}
              tabIndex={-1}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

export default RecentSearches;
