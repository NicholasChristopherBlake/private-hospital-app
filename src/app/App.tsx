import clsx from "clsx";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "shared/lib/hooks/useTheme/useTheme";
import { Navbar } from "widgets/Navbar";
import { PageLoader } from "widgets/PageLoader/ui/PageLoader";
import { Sidebar } from "widgets/Sidebar";

export const RootLayout = () => {
  const {} = props;
  const { theme } = useTheme();

  return (
    <div className={clsx("app", theme)}>
      <Navbar />
      <div className="page-wrapper">
        <Sidebar />
        <div className="page-content">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
