import { Fragment } from 'react'

export const ProfileDetail = () => {
    return (
        <Fragment>
            <p className='text-15 text-gray-1 dark:text-gray-4 leading-[22px]'>
                If several languages coalesce, the grammar of the resulting language is more simple.
            </p>

            <div className='flex flex-col gap-3 lg:gap-[18px] text-black-1 dark:text-gray-4 my-4 lg:my-8'>
                <p className='flex items-center gap-[15px] text-15'>
                    <img
                        src='/images/profile/bx-user.svg'
                        width={15}
                        height={15}
                        alt='Adam Zampa'
                        title='Adam Zampa'
                        loading='lazy'
                        className='icon-dark-mode'
                    />
                    Adam Zampa
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
        </Fragment>
    )
}
