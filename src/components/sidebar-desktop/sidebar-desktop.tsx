import { SIDEBAR } from '@/constant/mockup-sidebar'
import { ButtonTheme } from '../button-theme'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '@/contexts/app.context'

export const SidebarDesktop = () => {
    const { keyword: keywordContext, setKeyword: setKeywordContext } = useContext(AppContext)

    return (
        <div className='h-screen bg-black-2 flex flex-col items-center justify-between py-5'>
            <div className='flex flex-col items-center justify-between gap-10'>
                <img src='/images/sidebar/bxs-message-alt-detail.png' alt='Doot' width={28} height={28} />
                {SIDEBAR?.map((item) => {
                    return (
                        <Link
                            key={item.key}
                            to={item.key}
                            target='_self'
                            className={`relative w-[75px] block before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-1 before:bg-green-1 before:transition-all before:duration-200 ${
                                keywordContext === item.key
                                    ? 'before:opacity-100'
                                    : 'before:opacity-0 hover:before:opacity-30'
                            }`}
                            onClick={() => setKeywordContext(item.key)}
                        >
                            <img
                                key={item.key}
                                src={item.icon}
                                alt={item.key}
                                className={`hover-green-icon mx-auto cursor-pointer transition-all duration-200 ${
                                    keywordContext === item.key ? 'filter-green-icon' : 'filter-gray-icon'
                                }`}
                                width={28}
                                height={28}
                            />
                        </Link>
                    )
                })}
            </div>
            <div className='flex flex-col items-center gap-9'>
                <ButtonTheme />
                <img src='/images/sidebar/img-user.png' alt='Name' width={36} height={36} />
            </div>
        </div>
    )
}
