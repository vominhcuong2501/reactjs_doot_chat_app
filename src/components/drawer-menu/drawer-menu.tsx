import { SIDEBAR } from '@/constant/mockup-sidebar'
import { useSidebar } from '@/lib/store/management-sidebar'
import { ButtonTheme } from '../button-theme'
import { Link } from 'react-router-dom'

export const DrawerMenu = () => {
    const { keyword, updateKeyword, updateToggleMenu, toggleMenu } = useSidebar()

    const handleCloseMenu = () => {
        updateToggleMenu(false)
    }

    return (
        <div
            className={`absolute top-0 transition-all duration-300 cursor-default w-full h-dvh bg-white dark:bg-black-1 z-50
                ${toggleMenu ? 'visible left-0' : 'invisible -left-full'}`}
        >
            <div className='h-screen w-full flex flex-col items-center'>
                <div className='flex justify-between items-center gap-5 w-full pl-5 shadow-md'>
                    <div className='flex items-center gap-2'>
                        <img
                            src='/images/sidebar/bxs-message-alt-detail.png'
                            alt='Name'
                            width={26}
                            height={26}
                            className='filter-green-icon'
                        />
                        <h1 className='font-bold text-xl text-green-1'>Doot</h1>
                    </div>
                    <div className='flex items-center gap-5'>
                        <ButtonTheme />
                        <p
                            className='p-4 border border-green-1 bg-green-1 text-white cursor-pointer'
                            onClick={() => updateToggleMenu(false)}
                        >
                            <img
                                src='/images/sidebar/icon-close.png'
                                alt='Name'
                                width={14}
                                height={14}
                                className='filter-white-icon'
                            />
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-between mt-5 w-full'>
                    {SIDEBAR?.map((item) => {
                        return (
                            <Link
                                key={item.key}
                                className={`hover-white-icon flex items-center gap-4 px-5 py-3 cursor-pointer group hover:bg-green-1 ${
                                    keyword === item.key ? 'bg-green-1' : ''
                                }`}
                                to={item.key}
                                target='_self'
                                onClick={handleCloseMenu}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.key}
                                    width={28}
                                    height={28}
                                    onClick={() => updateKeyword(item.key)}
                                    className={`${keyword === item.key ? 'filter-white-icon' : 'filter-gray-icon'}`}
                                />
                                <p
                                    className={`capitalize font-medium text-20 group-hover:text-white dark:text-white ${
                                        keyword === item.key ? 'text-white' : 'text-black-1'
                                    }`}
                                >
                                    {item.name}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
