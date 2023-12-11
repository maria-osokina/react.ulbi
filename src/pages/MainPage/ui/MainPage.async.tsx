import { lazy } from "react";

export const MainPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // так в реальности делать не стоит!!!
      // @ts-expect-error
      setTimeout(() => {
        resolve(import("./MainPage"));
      }, 1500);
    })
);
