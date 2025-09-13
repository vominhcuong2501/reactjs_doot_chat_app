import { MenuMobile, SidebarDesktop } from '@/components'
import { useDisplay } from '@/hooks'

interface Props {
    children?: React.ReactNode
}
export default function MainLayout({ children }: Props) {
    const isMobile = useDisplay(768)

    return (
        <div className=''>
            {!isMobile && <SidebarDesktop />}
            <div>
                {children}
                {isMobile && <MenuMobile />}
            </div>
        </div>
    )
}
