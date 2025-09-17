import { ImagePopup } from '@/components'
import { OTHER_TYPE } from '@/constant'
import { getInitials } from '@/hooks'
import { useDataUser } from '@/store'
import { useState } from 'react'

export const MessageHeader = () => {
    const { userData } = useDataUser()

    const [isOpen, setIsOpen] = useState(false)

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
                        <ImagePopup
                            source={userData?.avatar}
                            width={38}
                            height={38}
                            alt={userData?.name}
                            className='cursor-pointer rounded-full w-8 h-8 lg:w-[38px] lg:h-[38px]'
                            isStatus
                        />
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
                        onClick={() => setIsOpen(!isOpen)}
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

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className='fixed top-0 left-0 w-screen h-screen bg-black-8 bg-opacity-10 flex flex-col items-center justify-center z-[4]'
                >
                    <div className='max-w-[343px] w-full bg-white text-center rounded-xl overflow-hidden pb-6'>
                        <div className='relative z-[1]'>
                            <img
                                src='/images/profile/bg-profile.jpg'
                                alt='Background'
                                title='Background'
                                width={300}
                                height={160}
                                className='w-full max-h-[160px] object-cover object-center'
                                loading='lazy'
                            />
                        </div>
                        <div className='-mt-10 relative z-[2] text-center flex flex-col items-center justify-center'>
                            <ImagePopup
                                source={userData?.avatar}
                                width={80}
                                height={80}
                                alt={userData?.name}
                                className='rounded-full'
                                classNameTextAvatar='w-20 h-20 text-24'
                            />
                            <h2 className='text-16 font-medium dark:text-gray-3 mt-[15px]'>{userData?.name}</h2>
                        </div>
                        <div className='flex flex-col gap-3 lg:gap-[18px] text-black-1 dark:text-gray-4 mt-6 px-4'>
                            <p className='flex items-center gap-[15px] text-15'>
                                <img
                                    src='/images/profile/bx-user.svg'
                                    width={15}
                                    height={15}
                                    alt={userData?.name}
                                    title={userData?.name}
                                    loading='lazy'
                                    className='icon-dark-mode'
                                />
                                {userData?.name}
                            </p>
                            <a
                                href='mailto:adc@123.com'
                                target='_blank'
                                title='adc@123.com'
                                className='flex items-center gap-[15px] text-15 transition-al duration-200 hover:text-green-1'
                            >
                                <img
                                    src='/images/profile/bx-message-rounded-dots.svg'
                                    width={15}
                                    height={15}
                                    alt='adc@123.com'
                                    title='adc@123.com'
                                    loading='lazy'
                                    className='icon-dark-mode'
                                />
                                adc@123.com
                            </a>
                            <p className='flex items-center gap-[15px] text-15'>
                                <img
                                    src='/images/profile/bx-location-plus.svg'
                                    width={15}
                                    height={15}
                                    alt='California, USA'
                                    title='California, USA'
                                    loading='lazy'
                                    className='icon-dark-mode'
                                />
                                California, USA
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
