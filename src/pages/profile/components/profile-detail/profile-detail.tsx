import { DATA_ACCOUNT, IMAGE_LAZY } from '@/constant'
import { Fragment } from 'react'

export const ProfileDetail = () => {
    return (
        <Fragment>
            <p className='text-15 text-gray-1 dark:text-gray-4 leading-[22px]'>{DATA_ACCOUNT.DESCRIPTION}</p>

            <div className='flex flex-col gap-3 lg:gap-[18px] text-black-1 dark:text-gray-4 my-4 lg:my-8'>
                <p className='flex items-center gap-[15px] text-15'>
                    <img
                        src='/images/profile/bx-user.svg'
                        width={15}
                        height={15}
                        alt={DATA_ACCOUNT.NAME}
                        title={DATA_ACCOUNT.NAME}
                        loading={IMAGE_LAZY}
                        className='icon-dark-mode'
                    />
                    {DATA_ACCOUNT.NAME}
                </p>
                <a
                    href={`mailto:${DATA_ACCOUNT.EMAIL}`}
                    target='_blank'
                    title={DATA_ACCOUNT.EMAIL}
                    className='flex items-center gap-[15px] text-15 transition-al duration-200 hover:text-green-1'
                >
                    <img
                        src='/images/profile/bx-message-rounded-dots.svg'
                        width={15}
                        height={15}
                        alt={DATA_ACCOUNT.EMAIL}
                        title={DATA_ACCOUNT.EMAIL}
                        loading={IMAGE_LAZY}
                        className='icon-dark-mode'
                    />
                    {DATA_ACCOUNT.EMAIL}
                </a>
                <p className='flex items-center gap-[15px] text-15'>
                    <img
                        src='/images/profile/bx-location-plus.svg'
                        width={15}
                        height={15}
                        alt={DATA_ACCOUNT.LOCATION}
                        title={DATA_ACCOUNT.LOCATION}
                        loading={IMAGE_LAZY}
                        className='icon-dark-mode'
                    />
                    {DATA_ACCOUNT.LOCATION}
                </p>
            </div>
        </Fragment>
    )
}
