import { MENU_MOBILE } from '@/constant'
import { AppContext } from '@/contexts/app.context'
import { useSidebar } from '@/store'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export const MenuMobile = () => {
    const { isOpen, setIsOpen } = useContext(AppContext)

    const { keyword, updateKeyword } = useSidebar()

    return (
        <div className='sticky left-0 bottom-0 w-full inset-shadow-sm flex items-center justify-around gap-5 px-5 py-3 bg-white dark:bg-black-3'>
            {MENU_MOBILE?.map((item) => {
                return (
                    <Link key={item.key} to={item.key} target='_self'>
                        <img
                            key={item.key}
                            src={item.icon}
                            alt={item.key}
                            className={`cursor-pointer hover-green-icon transition-all duration-200 w-6 h-6 ${
                                keyword === item.key ? 'filter-green-icon' : 'filter-gray-icon '
                            }`}
                            width={28}
                            height={28}
                            onClick={() => updateKeyword(item.key)}
                            loading='lazy'
                        />
                    </Link>
                )
            })}
            <img
                src='/images/sidebar/icon-burger.png'
                alt='Icon'
                title='Show Menu'
                className='hover-green-icon cursor-pointer filter-gray-icon'
                width={18}
                height={19}
                onClick={() => setIsOpen(!isOpen)}
                loading='lazy'
            />
        </div>
    )
}
