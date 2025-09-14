import { DrawerMenu, MenuMobile, SidebarDesktop } from '@/components'
import { useDisplay } from '@/hooks'
import { Message } from '@/pages'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    const isMobile = useDisplay(768)

    return (
        <div className='md:flex items-start mb-[60px] md:mb-0'>
            {!isMobile && <SidebarDesktop />}
            <div className='md:ml-[75px] md:max-w-[300px] w-full dark:bg-black-3 dark:text-white'>
                <Outlet />
            </div>
            {!isMobile && <Message />}
            {isMobile && (
                <>
                    <MenuMobile />
                    <DrawerMenu />
                </>
            )}
        </div>
    )
}
