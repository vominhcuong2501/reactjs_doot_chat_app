// route.tsx
import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import { Logout } from './pages/logout'
import { ChangePassword } from './pages/change-password'
import { Message } from './pages/message'
import { Bookmark, Calls, Chats, Contacts, Profile, Settings } from './pages'
import { useDisplay } from './hooks'
import { BOOKMARK, CALLS, CHANGE_PASSWORD, CHATS, CONTACTS, LOGOUT, MESSAGE, SETTINGS } from './constant'
import type { RouteObject } from 'react-router-dom'

const MainLayout = lazy(() => import('./layouts/MainLayout'))
const FormLayout = lazy(() => import('./layouts/FormLayout'))

export default function useRouteElements() {
    const isMobile = useDisplay(768)

    const mainChildren: RouteObject[] = [
        { index: true, element: <Profile /> },
        { path: CHATS, element: <Chats /> },
        { path: CONTACTS, element: <Contacts /> },
        { path: CALLS, element: <Calls /> },
        { path: BOOKMARK, element: <Bookmark /> },
        { path: SETTINGS, element: <Settings /> }
    ]

    if (isMobile) {
        mainChildren.push({ path: `${MESSAGE}/:id`, element: <Message /> })
    }

    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: mainChildren
        },
        {
            path: '/',
            element: <FormLayout />,
            children: [
                { path: CHANGE_PASSWORD, element: <ChangePassword /> },
                { path: LOGOUT, element: <Logout /> }
            ]
        }
    ])
}
