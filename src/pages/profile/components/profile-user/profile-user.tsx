import { ImageAvatar } from '@/components'
import { DATA_ACCOUNT, IMAGE_LAZY } from '@/constant'
import { LIST_STATUS } from '@/mockup'
import { useState } from 'react'
import config from './../../../../config/config.json'

export const ProfileUser = ({
    title,
    name,
    position,
    displayStatus
}: {
    title?: string
    name?: string
    position?: string
    displayStatus?: boolean
}) => {
    const [isStatus, setIsStatus] = useState(false)

    const [status, setStatus] = useState(LIST_STATUS[0]?.text)

    const idxStatus = LIST_STATUS?.find((item) => item?.text === status)

    return (
        <div className='pb-4 md:pb-[26px] border-b border-gray-5 dark:border-black-2 sticky top-0 bg-white dark:bg-black-3 z-[3]'>
            <div className='relative z-[1]'>
                <img
                    src='/images/profile/bg-profile.jpg'
                    alt={config.txt_background}
                    title={config.txt_background}
                    width={300}
                    height={160}
                    className='w-full max-h-[160px] object-cover object-center'
                    loading={IMAGE_LAZY}
                />
                <div className='flex items-center justify-between gap-5 absolute top-[15px] left-4 right-4'>
                    <h1 className='text-18 font-medium text-white capitalize'>{title}</h1>
                    <img
                        src='/images/profile/bx-dots-vertical-rounded.svg'
                        alt={config.txt_icon}
                        title={config.txt_icon}
                        width={22}
                        height={22}
                        className='cursor-pointer'
                        loading={IMAGE_LAZY}
                    />
                </div>
            </div>
            <div className='-mt-10 relative z-[2] text-center flex flex-col items-center justify-center'>
                <ImageAvatar source={DATA_ACCOUNT.AVATAR} width={80} height={80} alt={name} className='rounded-full' />
                {name && <h2 className='text-16 font-medium dark:text-gray-3 mt-[15px]'>{name}</h2>}
                {position && <p className='text-14 text-gray-1 dark:text-gray-4 mt-[5px]'>{position}</p>}
                {displayStatus && (
                    <div
                        className='relative flex items-center gap-2 cursor-pointer mt-5'
                        onClick={() => setIsStatus(!isStatus)}
                    >
                        <span className={`w-[9px] h-[9px] rounded-full ${idxStatus?.color}`}></span>
                        <p className='text-15 text-gray-1 capitalize dark:text-gray-4'>{status}</p>
                        <img
                            src='/images/profile/chevron-down.svg'
                            alt={config.txt_icon}
                            title={config.txt_icon}
                            width={15}
                            height={15}
                            loading={IMAGE_LAZY}
                            className={`${isStatus && 'rotate-180'} transition-all duration-200 icon-dark-mode`}
                        />
                        {isStatus && (
                            <div className='absolute top-[350%] left-1/2 -translate-1/2 shadow-2xl bg-white border border-gray-6 min-w-[150px] rounded'>
                                {LIST_STATUS?.map((item) => {
                                    return (
                                        <p
                                            key={item?.text}
                                            className='flex items-center gap-2 capitalize hover:bg-green-1 hover:text-white px-4 py-1'
                                            onClick={() => setStatus(item?.text)}
                                        >
                                            <span className={`w-[9px] h-[9px] rounded-full ${item?.color}`}></span>
                                            {item?.text}
                                        </p>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
