import { ImagePopup } from '@/components'
import { useDataUser } from '@/store'

export const MessageDetail = () => {
    const { userData } = useDataUser()

    return (
        <div className='max-h-[calc(100dvh-175px)] lg:max-h-[calc(100dvh-179px)] h-[100dvh] flex-1 overflow-y-scroll scrollbar p-4 lg:p-6'>
            <div className='flex flex-col gap-6'>
                <div className='flex items-end gap-4'>
                    <ImagePopup
                        source={userData?.avatar}
                        width={38}
                        height={38}
                        alt={userData?.name}
                        className='cursor-pointer rounded-full w-8 h-8 lg:w-[38px] lg:h-[38px] object-contain object-center'
                        isStatus
                        classNameTextAvatar='w-8 h-8 lg:w-[38px] lg:h-[38px]'
                    />

                    <div className='flex flex-col gap-2'>
                        <p className='bg-white dark:bg-gray-13 shadow-sm py-3 px-4 text-black-1 dark:text-white-2 rounded'>
                            Good morning 😊
                        </p>
                        <p className='text-12 font-medium text-gray-1 dark:text-gray-4'>10:07 am</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-end'>
                    <p className='bg-green-3 shadow-sm py-3 px-4 text-black-1 dark:text-white-2 rounded'>
                        Good morning, How are you? What about our next meeting?
                    </p>
                    <p className='flex items-center gap-2 text-12 font-medium text-gray-1 dark:text-gray-4'>
                        <img
                            src='/images/message/bx-check-double.svg'
                            alt='Icon'
                            title='Icon'
                            width={14}
                            height={14}
                            loading='lazy'
                            className='rounded-full'
                        />
                        10:12 am
                    </p>
                </div>
                <div className='flex items-end gap-4'>
                    <ImagePopup
                        source={userData?.avatar}
                        width={38}
                        height={38}
                        alt={userData?.name}
                        className='cursor-pointer rounded-full w-8 h-8 lg:w-[38px] lg:h-[38px] object-contain object-center'
                        isStatus
                    />
                    <div>
                        <p className='bg-white dark:bg-gray-13 shadow-sm py-3 px-4 text-black-1 dark:text-white-2 rounded inline-block'>
                            Yeah everything is fine. Our next meeting tomorrow at 10.00 AM
                        </p>
                        <p className='bg-white dark:bg-gray-13 shadow-sm py-3 px-4 text-black-1 dark:text-white-2 rounded mt-2'>
                            Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents
                            for my parents 🎁.
                        </p>
                        <p className='text-12 font-medium text-gray-1 dark:text-gray-4 mt-2'>10:13 am</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-end'>
                    <p className='bg-green-3 shadow-sm py-3 px-4 text-black-1 dark:text-white-2 rounded'>
                        Wow that's great
                    </p>
                    <p className='flex items-center gap-2 text-12 font-medium text-gray-1 dark:text-gray-4 mt-2'>
                        <img
                            src='/images/message/bx-check-double.svg'
                            alt='Icon'
                            title='Icon'
                            width={14}
                            height={14}
                            loading='lazy'
                            className='rounded-full'
                        />
                        10:14 am
                    </p>
                </div>
                <div className='flex items-end gap-4'>
                    <ImagePopup
                        source={userData?.avatar}
                        width={38}
                        height={38}
                        alt={userData?.name}
                        className='cursor-pointer rounded-full w-8 h-8 lg:w-[38px] lg:h-[38px] object-contain object-center'
                        isStatus
                    />
                    <div>
                        <div className='flex items-center gap-2.5'>
                            <ImagePopup
                                isDot
                                source='/images/profile/image-1.jpg'
                                alt={userData?.name}
                                className='rounded-lg'
                            />
                            <ImagePopup
                                isDot
                                source='/images/profile/image-2.jpg'
                                alt={userData?.name}
                                className='rounded-lg'
                            />
                        </div>
                        <p className='text-12 font-medium text-gray-1 dark:text-gray-4 mt-2'>10:15 am</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-end'>
                    <div className='bg-green-3 shadow-sm py-3 px-4 rounded'>
                        <div className='px-3 py-2.5 border border-green-1 flex items-center gap-4 justify-between rounded transition-all duration-200 hover:border-green-1'>
                            <div className='flex items-center gap-4'>
                                <img
                                    src='/images/profile/icon-image.svg'
                                    width={29}
                                    height={29}
                                    alt='design-phase-1-approved.pdf'
                                    title='design-phase-1-approved.pdf'
                                    loading='lazy'
                                />
                                <div className='flex-1'>
                                    <p className='text-14 font-medium text-black-1 dark:text-gray-3'>
                                        design-phase-1-approved.pdf
                                    </p>
                                    <p className='text-13 text-gray-1 dark:text-gray-4'>12.5 MB</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <a
                                    href='/images/profile/bxs-download.svg'
                                    className='cursor-pointer'
                                    download='bxs-download.svg'
                                >
                                    <img
                                        src='/images/profile/bxs-download.svg'
                                        width={15}
                                        height={15}
                                        alt='design-phase-1-approved.pdf'
                                        title='design-phase-1-approved.pdf'
                                        loading='lazy'
                                        className='icon-dark-mode'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className='flex items-center gap-2 text-12 font-medium text-gray-1 dark:text-gray-4'>
                        <img
                            src='/images/message/bx-check-double.svg'
                            alt='Icon'
                            title='Icon'
                            width={14}
                            height={14}
                            loading='lazy'
                            className='rounded-full'
                        />
                        10:17 am
                    </p>
                </div>
            </div>
        </div>
    )
}
