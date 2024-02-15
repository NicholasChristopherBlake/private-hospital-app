import { lazy } from "react";

export const AboutPageAsync = lazy(() => {
  return new Promise((resolve) => {
    // @ts-expect-error fake timeout
    setTimeout(() => resolve(import("./AboutPage")), 1500);
  });
});
