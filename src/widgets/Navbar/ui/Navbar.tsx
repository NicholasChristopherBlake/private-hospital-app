import clsx from "clsx";
import cl from "./Navbar.module.css";
import { ReactNode, useState } from "react";
import { AppLink } from "shared/ui/AppLink/AppLink";
import MainLogo from "shared/assets/main-20-20.svg";
import AboutLogo from "shared/assets/about-20-20.svg";
import { RoutePaths } from "shared/config/routing/RoutePaths";
import { Button } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { Input } from "shared/ui/Input/Input";
import { Portal } from "shared/ui/Portal/Portal";

interface NavbarProps {
  className?: string;
  children?: ReactNode;
}

export const Navbar = (props: NavbarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => {
    setIsModalOpen(false);
  };
  // const {} = props;

  return (
    <nav className={clsx(cl.navbar)}>
      <div className={cl.logo}>Logo</div>
      <div className={cl.links}>
        <AppLink to={RoutePaths.main}>
          Main
          <MainLogo fill="red" />
        </AppLink>
        <AppLink to={RoutePaths.about}>
          About
          <AboutLogo />
        </AppLink>
      </div>
      <Button variant="accent" onClick={() => setIsModalOpen((prev) => !prev)}>
        Sign Up
      </Button>
      {document.querySelector(".app") && isModalOpen ? (
        <Portal container={document.querySelector(".app")!}>
          <Modal isOpen={isModalOpen} onClose={onCloseModal}>
            <Input placeholder="Enter username..." />
            <Input placeholder="Enter password..." />
            <Button variant="accent">Submit</Button>
          </Modal>
        </Portal>
      ) : null}
    </nav>
  );
};
