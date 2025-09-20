import { ButtonTheme } from '../button-theme'
import { Link, useNavigate } from 'react-router-dom'
import { useSidebar } from '@/store'
import { SIDEBAR } from '@/mockup'
import { IMAGE_LAZY, LOGO } from '@/constant'
import config from './../../config/config.json'

export const SidebarDesktop = () => {
    const { keyword, updateKeyword } = useSidebar()

    const navigate = useNavigate()

    return (
        <div className='fixed top-0 left-0 min-h-screen bg-black-2 dark:bg-black-3 flex flex-col items-center justify-between py-5'>
            <div className='flex flex-col items-center justify-between gap-10'>
                <img src={LOGO.IMAGE} alt={LOGO.NAME} title={LOGO.NAME} width={28} height={28} loading={IMAGE_LAZY} />
                {SIDEBAR?.map((item) => {
                    return (
                        <Link
                            key={item.key}
                            to={item.key}
                            target='_self'
                            className={`relative w-[75px] block before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-1 before:bg-green-1 before:transition-all before:duration-200 ${
                                keyword === item.key ? 'before:opacity-100' : 'before:opacity-0 hover:before:opacity-30'
                            }`}
                            onClick={() => updateKeyword(item.key)}
                            title={item.name}
                        >
                            <img
                                key={item.key}
                                src={item.icon}
                                alt={item.key}
                                title={item.key}
                                className={`hover-green-icon mx-auto cursor-pointer transition-all duration-200 ${
                                    keyword === item.key ? 'filter-green-icon' : 'filter-gray-icon'
                                }`}
                                width={28}
                                height={28}
                                loading={IMAGE_LAZY}
                            />
                        </Link>
                    )
                })}
            </div>
            <div className='flex flex-col items-center gap-9'>
                <ButtonTheme />
                <img
                    src='/images/sidebar/img-user.png'
                    alt={config.txt_change_password}
                    title={config.txt_change_password}
                    width={36}
                    height={36}
                    loading={IMAGE_LAZY}
                    onClick={() => {
                        navigate('/')
                        updateKeyword('')
                    }}
                />
            </div>
        </div>
    )
}
