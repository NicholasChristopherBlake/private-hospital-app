import { useTranslation } from "react-i18next";
import cl from "./Input.module.css";
import clsx from "clsx";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder: string;
}

export const Input = (props: InputProps) => {
  const [value, setValue] = useState<string>("");
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const { placeholder, ...otherProps } = props;
  const { t } = useTranslation();

  return (
    <input
      onChange={onInputChange}
      className={clsx(cl.input)}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};
