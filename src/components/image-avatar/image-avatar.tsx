import { getInitials } from '@/hooks'
import React, { useState } from 'react'
import { Modal } from '../modal'
import { IMAGE_LAZY, STATUS, TYPE_DOCUMENT } from '@/constant'
import config from './../../config/config.json'

interface ImageAvatarProps {
    source?: string
    alt?: string
    width?: number
    height?: number
    className?: string
    isDot?: boolean
    isStatus?: boolean
    typeStatus?: string
    classNameTextAvatar?: string
    isShowAvatar?: boolean
}

export const ImageAvatar = ({
    source,
    alt = '',
    width,
    height,
    className,
    isDot = false,
    isStatus = false,
    typeStatus,
    classNameTextAvatar = 'w-[29px] h-[29px]',
    isShowAvatar = true
}: ImageAvatarProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='relative'>
                {source && source !== TYPE_DOCUMENT.OTHER ? (
                    <img
                        src={source}
                        alt={alt}
                        width={width}
                        height={height}
                        className={`cursor-pointer ${className}`}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                ) : source === TYPE_DOCUMENT.OTHER ? (
                    <p
                        className={`${classNameTextAvatar} rounded-full bg-green-1 grid place-items-center text-white text-14 font-semibold`}
                    >
                        {getInitials(source)}
                    </p>
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
                        alt={config.txt_icon}
                        title={config.txt_icon}
                        width={26}
                        height={24}
                        loading={IMAGE_LAZY}
                        className='absolute right-2 bottom-3 cursor-pointer '
                    />
                )}
                {isStatus && (
                    <span className='absolute bottom-0 right-0 p-0.5 bg-white rounded-full w-2.5 h-2.5 grid place-items-center'>
                        <span
                            className={`w-1.5 h-1.5 rounded-full bg-green-1 
                                ${typeStatus === STATUS.ACTIVE && 'bg-green-1'} 
                                ${typeStatus === STATUS.BUSY && 'bg-red-500'} 
                                ${typeStatus === STATUS.OFF && 'bg-gray-1'}`}
                        />
                    </span>
                )}
            </div>

            {isShowAvatar && source && source !== TYPE_DOCUMENT.OTHER && (
                <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
                    <img src={source} alt={alt} width={width} height={height} className='rounded-lg' />
                </Modal>
            )}
        </>
    )
}
