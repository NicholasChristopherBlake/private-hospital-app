import { useTranslation } from "react-i18next";
import cl from "./LoginModal.module.css";
import clsx from "clsx";

interface LoginModalProps {
  className?: string;
}

export const LoginModal = (props: LoginModalProps) => {
  // const {} = props;
  const { t } = useTranslation();

  return <div className={clsx(cl.loginModal, {}, [])}></div>;
};
