import clsx from 'clsx'
import cl from './Sidebar.module.css'
import { ReactNode } from 'react';

interface SidebarProps {
  className?: string;
  children?: ReactNode;
}

export const Sidebar = (props: SidebarProps) => {
  const {} = props;

  return (
    <div className={clsx(cl.sidebar)}>Sidebar</div>
  )
}
