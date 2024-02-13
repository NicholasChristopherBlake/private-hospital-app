import { createRoot } from "react-dom/client";
import "./app/styles/index.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "app/providers/routing/router";
import { ThemeProvider } from "app/providers/ThemeProvider/ThemeProvider";

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById("app")!);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
