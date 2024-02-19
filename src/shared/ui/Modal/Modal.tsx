import cl from "./Modal.module.css";
import clsx from "clsx";
import { MouseEvent, ReactNode, useEffect } from "react";

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = (props: ModalProps) => {
  const { children, isOpen, onClose } = props;

  const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onOverlayClick = () => {
    onClose();
  };

  const onEscPress = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown" as const, (e) => onEscPress(e));
    return () => document.removeEventListener("keydown", (e) => onEscPress(e));
  }, []);

  return (
    <dialog className={clsx(cl.modal)} open={isOpen}>
      <div className={cl.overlay} onClick={onOverlayClick}>
        <div className={cl.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </dialog>
  );
};
