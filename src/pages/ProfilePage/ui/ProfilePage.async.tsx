import { lazy } from "react";

export const ProfilePageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // так в реальности делать не стоит!!!
      
            setTimeout(() => {
                // @ts-expect-error
                resolve(import("./ProfilePage"));
            }, 1500);
        })
);