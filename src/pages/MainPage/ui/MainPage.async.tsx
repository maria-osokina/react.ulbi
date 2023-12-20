import { lazy } from "react";

export const MainPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // так в реальности делать не стоит!!!
      
            setTimeout(() => {
                // @ts-expect-error
                resolve(import("./MainPage"));
            }, 1500);
        })
);
