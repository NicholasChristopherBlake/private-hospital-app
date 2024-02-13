import { RootLayout } from "app/App";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage/ui/NotFoundPage";
import { RouteObject, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);
