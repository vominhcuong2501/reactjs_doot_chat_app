// route.tsx
import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import { Logout } from './pages/logout'
import { ChangePassword } from './pages/change-password'
import { Message } from './pages/message'
import { Bookmark, Calls, Chats, Contacts, Profile, Settings } from './pages'
import { useDisplay } from './hooks'
import type { RouteObject } from 'react-router-dom'
import { PAGE_KEYWORD, SCREEN_DEVICE } from './constant'

const MainLayout = lazy(() => import('./layouts/MainLayout'))
const FormLayout = lazy(() => import('./layouts/FormLayout'))

export default function useRouteElements() {
    const isMobile = useDisplay(SCREEN_DEVICE.MOBILE)

    const mainChildren: RouteObject[] = [
        { index: true, element: <Profile /> },
        { path: PAGE_KEYWORD.CHATS, element: <Chats /> },
        { path: PAGE_KEYWORD.CONTACTS, element: <Contacts /> },
        { path: PAGE_KEYWORD.CALLS, element: <Calls /> },
        { path: PAGE_KEYWORD.BOOKMARK, element: <Bookmark /> },
        { path: PAGE_KEYWORD.SETTINGS, element: <Settings /> }
    ]

    if (isMobile) {
        mainChildren.push({ path: `${PAGE_KEYWORD.MESSAGE}/:id`, element: <Message /> })
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
                { path: PAGE_KEYWORD.CHANGE_PASSWORD, element: <ChangePassword /> },
                { path: PAGE_KEYWORD.LOGOUT, element: <Logout /> }
            ]
        }
    ])
}
