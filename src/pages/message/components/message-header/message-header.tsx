import { OTHER_TYPE } from '@/constant'
import { getInitials } from '@/hooks'
import { useDataUser } from '@/store'

export const MessageHeader = () => {
    const { userData } = useDataUser()

    return (
        <div className='lg:max-h-[93px] lg:h-full p-4 lg:p-6 border-b border-gray-12 dark:border-black-7'>
            <div className='flex items-center justify-between gap-3'>
                <div className='flex items-center gap-2 lg:gap-4'>
                    {(userData?.avatar === OTHER_TYPE || !userData?.avatar) && (
                        <div className='relative'>
                            <p className='w-8 h-8 lg:w-[38px] lg:h-[38px] rounded-full bg-green-1 grid place-items-center text-white text-14 font-semibold'>
                                {!userData?.avatar ? getInitials(userData?.name) : userData?.avatar}
                            </p>
                            <span className='absolute bottom-0 right-0 p-0.5 bg-white rounded-full w-2.5 h-2.5 grid place-items-center'>
                                <span className='w-1.5 h-1.5 rounded-full bg-green-1' />
                            </span>
                        </div>
                    )}
                    {userData?.avatar && userData?.avatar !== OTHER_TYPE && (
                        <div className='relative'>
                            <img
                                src={userData?.avatar}
                                alt={userData?.name}
                                title={userData?.name}
                                width={38}
                                height={38}
                                loading='lazy'
                                className='cursor-pointer rounded-full w-8 h-8 lg:w-[38px] lg:h-[38px]'
                            />
                            <span className='absolute bottom-0 right-0 p-0.5 bg-white rounded-full w-2.5 h-2.5 grid place-items-center'>
                                <span className='w-1.5 h-1.5 rounded-full bg-green-1' />
                            </span>
                        </div>
                    )}

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
                    <img
                        src='/images/message/bxs-info-circle.svg'
                        alt='Icon'
                        title='Icon'
                        width={22}
                        height={22}
                        loading='lazy'
                        className='cursor-pointer hover-green-icon icon-dark-mode'
                    />
                    <img
                        src='/images/message/bx-dots-vertical-rounded.svg'
                        alt='More'
                        title='More'
                        width={22}
                        height={22}
                        loading='lazy'
                        className='cursor-pointer hover-green-icon icon-dark-mode'
                    />
                </div>
            </div>
        </div>
    )
}
