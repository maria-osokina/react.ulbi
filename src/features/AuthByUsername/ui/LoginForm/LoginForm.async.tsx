import { FC, lazy } from 'react'
import { LoginFormProps } from './LoginForm'

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    async () =>
        await new Promise((resolve) => {
            // так в реальности делать не стоит!!!
            setTimeout(() => { resolve(import('./LoginForm')) }, 1500)
        })
)