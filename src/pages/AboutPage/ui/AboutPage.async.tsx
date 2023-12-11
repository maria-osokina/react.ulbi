import { lazy } from 'react'

export const AboutPageAsync = lazy(
    async () =>
        await new Promise((resolve) => {
            // так в реальности делать не стоит!!!
            // @ts-expect-error
            setTimeout(() => { resolve(import('./AboutPage')) }, 1500)
        })
)
