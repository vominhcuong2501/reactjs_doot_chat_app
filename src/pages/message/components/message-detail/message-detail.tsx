import { ImagePopup } from '@/components'
import { getInitials } from '@/hooks'
import { useDataUser } from '@/store'

export const MessageDetail = () => {
    const { userData } = useDataUser()

    return (
        <div className='max-h-[calc(100dvh-175px)] lg:max-h-[calc(100dvh-179px)] h-[100dvh] flex-1 overflow-y-scroll scrollbar p-4 lg:p-6'>
            <div className='flex flex-col gap-6'>
                <div className='flex items-end gap-4'>
                    {(userData?.avatar === '#' || !userData?.avatar) && (
                        <div className='relative flex-shrink-0'>
                            <p className='w-8 h-8 rounded-full bg-green-1 grid place-items-center text-white text-14 font-semibold'>
                                {!userData?.avatar ? getInitials(userData?.name) : userData?.avatar}
                            </p>
                            <span className='absolute bottom-0 right-0 p-0.5 bg-white rounded-full w-2.5 h-2.5 grid place-items-center'>
                                <span className='w-1.5 h-1.5 rounded-full bg-green-1' />
                            </span>
                        </div>
                    )}
                    {userData?.avatar && userData?.avatar !== '#' && (
                        <div className='relative flex-shrink-0'>
                            <img
                                src={userData?.avatar}
                                alt={userData?.name}
                                title={userData?.name}
                                width={38}
                                height={38}
                                loading='lazy'
                                className='cursor-pointer rounded-full w-8 h-8'
                            />
                            <span className='absolute bottom-0 right-0 p-0.5 bg-white rounded-full w-2.5 h-2.5 grid place-items-center'>
                                <span className='w-1.5 h-1.5 rounded-full bg-green-1' />
                            </span>
                        </div>
                    )}

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
                    {(userData?.avatar === '#' || !userData?.avatar) && (
                        <div className='relative flex-shrink-0'>
                            <p className='w-8 h-8 rounded-full bg-green-1 grid place-items-center text-white text-14 font-semibold'>
                                {!userData?.avatar ? getInitials(userData?.name) : userData?.avatar}
                            </p>
                            <span className='absolute bottom-0 right-0 p-0.5 bg-white rounded-full w-2.5 h-2.5 grid place-items-center'>
                                <span className='w-1.5 h-1.5 rounded-full bg-green-1' />
                            </span>
                        </div>
                    )}
                    {userData?.avatar && userData?.avatar !== '#' && (
                        <div className='relative flex-shrink-0'>
                            <img
                                src={userData?.avatar}
                                alt={userData?.name}
                                title={userData?.name}
                                width={38}
                                height={38}
                                loading='lazy'
                                className='cursor-pointer rounded-full w-8 h-8'
                            />
                            <span className='absolute bottom-0 right-0 p-0.5 bg-white rounded-full w-2.5 h-2.5 grid place-items-center'>
                                <span className='w-1.5 h-1.5 rounded-full bg-green-1' />
                            </span>
                        </div>
                    )}
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
                    {(userData?.avatar === '#' || !userData?.avatar) && (
                        <div className='relative flex-shrink-0'>
                            <p className='w-8 h-8 rounded-full bg-green-1 grid place-items-center text-white text-14 font-semibold'>
                                {!userData?.avatar ? getInitials(userData?.name) : userData?.avatar}
                            </p>
                            <span className='absolute bottom-0 right-0 p-0.5 bg-white rounded-full w-2.5 h-2.5 grid place-items-center'>
                                <span className='w-1.5 h-1.5 rounded-full bg-green-1' />
                            </span>
                        </div>
                    )}
                    {userData?.avatar && userData?.avatar !== '#' && (
                        <div className='relative flex-shrink-0'>
                            <img
                                src={userData?.avatar}
                                alt={userData?.name}
                                title={userData?.name}
                                width={38}
                                height={38}
                                loading='lazy'
                                className='cursor-pointer rounded-full w-8 h-8'
                            />
                            <span className='absolute bottom-0 right-0 p-0.5 bg-white rounded-full w-2.5 h-2.5 grid place-items-center'>
                                <span className='w-1.5 h-1.5 rounded-full bg-green-1' />
                            </span>
                        </div>
                    )}
                    <div>
                        <div className='flex items-center gap-2.5'>
                            <ImagePopup src='/images/profile/image-1.jpg' alt={userData?.name} />
                            <ImagePopup src='/images/profile/image-2.jpg' alt={userData?.name} />
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
