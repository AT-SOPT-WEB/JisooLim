import React from "react";
import { input } from "./Login.css";

interface Props {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}

const LoginInput = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  autoComplete,
}: Props) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    className={input}
    value={value}
    onChange={onChange}
    autoComplete={autoComplete}
  />
);

export default LoginInput;
