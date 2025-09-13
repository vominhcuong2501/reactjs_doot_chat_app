import { DrawerMenu, MenuMobile, SidebarDesktop } from '@/components'
import { useDisplay } from '@/hooks'
import { Message } from '@/pages'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    const isMobile = useDisplay(768)

    return (
        <div className='md:flex items-start h-screen'>
            {!isMobile && <SidebarDesktop />}
            <Outlet />
            <div className='flex-1'>{!isMobile && <Message />}</div>
            <div className='fixed bottom-0 w-full inset-shadow-sm'>{isMobile && <MenuMobile />}</div>
            {isMobile && <DrawerMenu />}
        </div>
    )
}
