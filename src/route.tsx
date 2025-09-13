import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

import { Logout } from './pages/logout'
import { ChangePassword } from './pages/change-password'
import { HomePage } from './pages/homepage'

const MainLayout = lazy(() => import('./layouts/MainLayout'))
const FormLayout = lazy(() => import('./layouts/FormLayout'))

export default function useRouteElements() {
    const routeElements = useRoutes([
        {
            path: '/',
            element: (
                <MainLayout>
                    <HomePage />
                </MainLayout>
            )
        },
        {
            path: 'change-password',
            element: (
                <FormLayout>
                    <ChangePassword />
                </FormLayout>
            )
        },
        {
            path: 'logout',
            element: (
                <FormLayout>
                    <Logout />
                </FormLayout>
            )
        }
    ])
    return routeElements
}
