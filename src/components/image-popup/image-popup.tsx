import { ACTIVE_STATUS, BUSY_STATUS, OFF_STATUS, OTHER_TYPE } from '@/constant'
import { getInitials } from '@/hooks'
import React, { useState } from 'react'

interface ImagePopupProps {
    source?: string
    alt?: string
    width?: number
    height?: number
    className?: string
    isDot?: boolean
    isStatus?: boolean
    typeStatus?: string
    classNameTextAvatar?: string
}

export const ImagePopup = ({
    source,
    alt = '',
    width,
    height,
    className,
    isDot = false,
    isStatus = false,
    typeStatus,
    classNameTextAvatar = 'w-[29px] h-[29px]'
}: ImagePopupProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='relative'>
                {source && source !== OTHER_TYPE ? (
                    <img
                        src={source}
                        alt={alt}
                        width={width}
                        height={height}
                        className={`cursor-pointer ${className}`}
                        onClick={() => setIsOpen(true)}
                    />
                ) : (
                    <p
                        className={`${classNameTextAvatar} rounded-full bg-green-1 grid place-items-center text-white text-14 font-semibold`}
                    >
                        {getInitials(alt)}
                    </p>
                )}

                {isDot && (
                    <img
                        src='/images/message/icon-dots.svg'
                        alt='Icon'
                        title='Icon'
                        width={26}
                        height={24}
                        loading='lazy'
                        className='absolute right-2 bottom-3 cursor-pointer '
                    />
                )}
                {isStatus && (
                    <span className='absolute bottom-0 right-0 p-0.5 bg-white rounded-full w-2.5 h-2.5 grid place-items-center'>
                        <span
                            className={`w-1.5 h-1.5 rounded-full bg-green-1 
                                ${typeStatus === ACTIVE_STATUS && 'bg-green-1'} 
                                ${typeStatus === BUSY_STATUS && 'bg-red-500'} 
                                ${typeStatus === OFF_STATUS && 'bg-gray-1'}`}
                        />
                    </span>
                )}
            </div>

            {isOpen && source && source !== OTHER_TYPE && (
                <div
                    onClick={() => setIsOpen(false)}
                    className='fixed top-0 left-0 w-screen h-screen bg-black-8 bg-opacity-10 flex flex-col items-center justify-center z-[4]'
                >
                    <img src={source} alt={alt} width={width} height={height} className='rounded-lg' />
                </div>
            )}
        </>
    )
}
