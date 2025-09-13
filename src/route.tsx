// route.tsx
import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import { Logout } from './pages/logout'
import { ChangePassword } from './pages/change-password'
import { Message } from './pages/message'
import { Bookmark, Calls, Chats, Contacts, Profile, Settings } from './pages'
import { useDisplay } from './hooks'

const MainLayout = lazy(() => import('./layouts/MainLayout'))
const FormLayout = lazy(() => import('./layouts/FormLayout'))

export default function useRouteElements() {
    const isMobile = useDisplay(768)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mainChildren: any[] = [
        { index: true, element: <Profile /> },
        { path: 'chats', element: <Chats /> },
        { path: 'contacts', element: <Contacts /> },
        { path: 'calls', element: <Calls /> },
        { path: 'bookmark', element: <Bookmark /> },
        { path: 'settings', element: <Settings /> }
    ]

    if (isMobile) {
        mainChildren.push({ path: 'chats/:id', element: <Message /> })
    }

    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: mainChildren
        },
        {
            path: '/change-password',
            element: (
                <FormLayout>
                    <ChangePassword />
                </FormLayout>
            )
        },
        {
            path: '/logout',
            element: (
                <FormLayout>
                    <Logout />
                </FormLayout>
            )
        }
    ])
}
