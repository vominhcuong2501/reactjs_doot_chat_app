import { useContext, useRef } from 'react'
import { IconInformation } from '../icon-info'
import { ImageAvatar } from '@/components'
import { IconOption } from '../icon-option'
import { AppContext } from '@/contexts/app.context'

export const MessageHeader = () => {
    const { userData } = useContext(AppContext)

    const menuRef = useRef<HTMLDivElement>(null)

    return (
        <div className='lg:max-h-[93px] lg:h-full p-4 lg:p-6 border-b border-gray-12 dark:border-black-7' ref={menuRef}>
            <div className='flex items-center justify-between gap-3'>
                <div className='flex items-center gap-2 lg:gap-4'>
                    <ImageAvatar
                        source={userData?.avatar}
                        width={38}
                        height={38}
                        alt={userData?.name}
                        className='cursor-pointer rounded-full w-8 h-8 lg:w-[38px] lg:h-[38px]'
                        isStatus
                        isShowAvatar
                        classNameTextAvatar='cursor-pointer rounded-full w-8 h-8 lg:w-[38px] lg:h-[38px]'
                    />
                    <div>
                        <p className='dark:text-gray-3 text-14 lg:text-18 font-medium text-black-1 line-clamp-1'>
                            {userData?.name}
                        </p>
                        <span className='dark:text-gray-4 text-11 lg:text-13 text-gray-1 lg:mt-1'>Online</span>
                    </div>
                </div>
                <div className='flex items-center gap-3 xl:gap-[30px]'>
                    <img
                        src='/images/message/bx-search.svg'
                        alt='Search'
                        title='Search'
                        width={22}
                        height={22}
                        loading='lazy'
                        className='cursor-pointer hover-green-icon icon-dark-mode'
                    />
                    <img
                        src='/images/message/bxs-phone-call.svg'
                        alt='Call'
                        title='Call'
                        width={22}
                        height={22}
                        loading='lazy'
                        className='cursor-pointer hover-green-icon icon-dark-mode'
                    />
                    <img
                        src='/images/message/bx-video.svg'
                        alt='Video'
                        title='Video'
                        width={22}
                        height={22}
                        loading='lazy'
                        className='cursor-pointer hover-green-icon icon-dark-mode'
                    />
                    <IconInformation />
                    <IconOption
                        menuRef={menuRef}
                        className='filter-green-icon hover-green-icon'
                        idDelete={userData?.id}
                        nameUser={userData?.name}
                    />
                </div>
            </div>
        </div>
    )
}
