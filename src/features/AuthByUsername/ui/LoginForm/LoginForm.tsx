import { useTranslation } from "react-i18next";
import cl from "./LoginForm.module.css";
import clsx from "clsx";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  // const {} = props;
  const { t } = useTranslation();

  return <div className={clsx(cl.loginForm, {}, [])}></div>;
};
