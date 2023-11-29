import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //так в реальности делать не стоит!!!
      // @ts-ignore
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);
