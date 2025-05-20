import { useState } from "react";

type FormState<T> = T;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function useForm<T extends Record<string, string>>(initialState: T) {
  const [form, setForm] = useState<FormState<T>>(initialState);

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return [form, handleChange, setForm] as const;
}
