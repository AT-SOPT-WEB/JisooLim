import React from "react";
import { historyList, historyCard } from "../../styles/NumberBaseball.style";

const HistoryList = ({ history, theme }) =>
  history.length > 0 && (
    <div css={historyList} aria-label="입력 기록">
      {history.map((item, idx) => (
        <div css={historyCard(theme)} key={idx}>
          <span>{item.value}</span>
          <span className="dash">-</span>
          <span>{item.result}</span>
        </div>
      ))}
    </div>
  );

export default HistoryList;
