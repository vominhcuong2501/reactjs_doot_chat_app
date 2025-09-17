import { DrawerMenu, MenuMobile, SidebarDesktop } from '@/components'
import { MOBILE_SCREEN } from '@/constant'
import { useDisplay } from '@/hooks'
import { Message } from '@/pages'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    const isMobile = useDisplay(MOBILE_SCREEN)

    return (
        <div className='flex flex-col md:flex-row items-start justify-between h-[100dvh] dark:bg-black-3 dark:text-white leading-[110%]'>
            {!isMobile && <SidebarDesktop />}
            <div className='md:ml-[75px] md:max-w-[300px] w-full overflow-y-scroll max-h-screen no-scrollbar'>
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
