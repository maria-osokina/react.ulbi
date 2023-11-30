import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //так в реальности делать не стоит!!!
      // @ts-ignore
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
