import { ButtonTheme } from '../button-theme'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '@/contexts/app.context'
import { SIDEBAR } from '@/constant'
import { useSidebar } from '@/store'

export const DrawerMenu = () => {
    const { isOpen, setIsOpen } = useContext(AppContext)

    const { keyword, updateKeyword } = useSidebar()

    const handleClick = (value: string) => {
        setIsOpen(false)
        updateKeyword(value)
    }

    return (
        <div
            className={`fixed inset-0 transition-all duration-300 cursor-default w-full h-full bg-white dark:bg-black-3 z-50
                ${isOpen ? 'visible left-0' : 'invisible -left-full'}`}
        >
            <div className='w-full flex flex-col items-center'>
                <div className='flex justify-between items-center gap-5 w-full pl-5 shadow-md'>
                    <div className='flex items-center gap-2'>
                        <img
                            src='/images/sidebar/bxs-message-alt-detail.png'
                            width={26}
                            height={26}
                            loading='lazy'
                            alt='Doot'
                            title='Doot'
                            className='filter-green-icon'
                        />
                        <h1 className='font-bold text-xl text-green-1'>Doot</h1>
                    </div>
                    <div className='flex items-center gap-5'>
                        <ButtonTheme />
                        <p
                            className='p-4 border border-green-1 bg-green-1 text-white cursor-pointer'
                            onClick={() => setIsOpen(false)}
                        >
                            <img
                                src='/images/sidebar/icon-close.png'
                                alt='Close'
                                title='Close'
                                width={14}
                                height={14}
                                loading='lazy'
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
                                onClick={() => handleClick(item.key)}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.key}
                                    title={item.key}
                                    width={28}
                                    height={28}
                                    loading='lazy'
                                    className={`${
                                        keyword === item.key ? 'filter-white-icon' : 'filter-gray-icon icon-hover'
                                    }`}
                                />
                                <p
                                    className={`capitalize font-medium text-20 group-hover:text-white  ${
                                        keyword === item.key ? 'text-white' : 'text-gray-1'
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
