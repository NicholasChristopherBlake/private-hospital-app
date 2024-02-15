import { lazy } from "react";

export const MainPageAsync = lazy(() => {
  return new Promise((resolve) => {
    // @ts-expect-error fake timeout
    setTimeout(() => resolve(import("./MainPage")), 300);
  });
});
