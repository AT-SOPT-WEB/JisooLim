import { input } from "../../shared/styles/formCommon.css";

interface Props {
  id: string;
  name?: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}

const LoginInput = ({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  autoComplete,
}: Props) => (
  <input
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    className={input}
    value={value}
    onChange={onChange}
    autoComplete={autoComplete}
  />
);

export default LoginInput;
