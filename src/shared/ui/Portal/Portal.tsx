import { createPortal } from "react-dom";
import { ReactNode } from "react";

interface PortalProps {
  className?: string;
  children: ReactNode;
  container?: Element | DocumentFragment;
}

export const Portal = (props: PortalProps) => {
  const { children, container = document.getElementById("app")! } = props;

  return createPortal(children, container);
};
