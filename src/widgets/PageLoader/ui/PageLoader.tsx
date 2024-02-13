import clsx from "clsx";
import cl from "./PageLoader.module.css";
import { ReactNode } from "react";
import { Loader } from "shared/ui/Loader/Loader";

interface PageLoaderProps {
  className?: string;
  children?: ReactNode;
}

export const PageLoader = (props: PageLoaderProps) => {
  // const {} = props;

  return (
    <div className={clsx(cl.pageLoader)}>
      <Loader />
    </div>
  );
};
