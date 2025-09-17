// route.tsx
import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import { Logout } from './pages/logout'
import { ChangePassword } from './pages/change-password'
import { Message } from './pages/message'
import { Bookmark, Calls, Chats, Contacts, Profile, Settings } from './pages'
import { useDisplay } from './hooks'
import {
    BOOKMARK_PAGE,
    CALLS_PAGE,
    CHANGE_PASSWORD_PAGE,
    CHATS_PAGE,
    CONTACTS_PAGE,
    LOGOUT_PAGE,
    MESSAGE_PAGE,
    MOBILE_SCREEN,
    SETTINGS_PAGE
} from './constant'
import type { RouteObject } from 'react-router-dom'

const MainLayout = lazy(() => import('./layouts/MainLayout'))
const FormLayout = lazy(() => import('./layouts/FormLayout'))

export default function useRouteElements() {
    const isMobile = useDisplay(MOBILE_SCREEN)

    const mainChildren: RouteObject[] = [
        { index: true, element: <Profile /> },
        { path: CHATS_PAGE, element: <Chats /> },
        { path: CONTACTS_PAGE, element: <Contacts /> },
        { path: CALLS_PAGE, element: <Calls /> },
        { path: BOOKMARK_PAGE, element: <Bookmark /> },
        { path: SETTINGS_PAGE, element: <Settings /> }
    ]

    if (isMobile) {
        mainChildren.push({ path: `${MESSAGE_PAGE}/:id`, element: <Message /> })
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
                { path: CHANGE_PASSWORD_PAGE, element: <ChangePassword /> },
                { path: LOGOUT_PAGE, element: <Logout /> }
            ]
        }
    ])
}
