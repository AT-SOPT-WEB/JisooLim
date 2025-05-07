import React from "react";
import { searchBox, errorText } from "../../styles/NumberBaseball.style";

const BaseballInput = ({
  value,
  onChange,
  error,
  result,
  disabled,
  theme,
}) => (
  <>
    <input
      type="text"
      inputMode="numeric"
      aria-label="숫자 야구 게임"
      placeholder="3자리 숫자를 입력해주세요."
      value={value}
      onChange={onChange}
      css={searchBox(theme)}
      maxLength={3}
      disabled={disabled}
    />
    {error ? (
      <div css={errorText(theme)}>
        ⚠️ 서로 다른 숫자 3자리를 입력해주세요!
      </div>
    ) : (
      result && <div css={errorText(theme)}>{result}</div>
    )}
  </>
);

export default BaseballInput;
