import React from "react";
import {
  recentSearchContainer,
  recentSearchTitle,
  recentSearchList,
  recentSearchItem,
  deleteButton,
} from "../../styles/GithubSearch.style";

const RecentSearches = ({ searches, onClick, onDelete, theme }) =>
  searches.length > 0 && (
    <div css={recentSearchContainer}>
      <div css={recentSearchTitle}>최근 검색어</div>
      <div css={recentSearchList}>
        {searches.map((search) => (
          <div
            key={search}
            css={recentSearchItem(theme)}
            tabIndex={0}
            onClick={() => onClick(search)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onClick(search);
            }}
          >
            <span>{search}</span>
            <button
              type="button"
              css={deleteButton}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(search);
              }}
              aria-label={`${search} 검색어 삭제`}
              tabIndex={-1}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );

export default RecentSearches;
