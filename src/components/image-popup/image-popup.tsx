import React, { useState } from 'react'

interface ImagePopupProps {
    src: string
    alt?: string
    width?: number
    height?: number
}

export const ImagePopup = ({ src, alt = '', width = 500, height = 500 }: ImagePopupProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='relative'>
                <img
                    src={src}
                    alt={alt}
                    width='148'
                    height='99'
                    className='cursor-pointer rounded-lg'
                    onClick={() => setIsOpen(true)}
                />
                <img
                    src='/images/message/icon-dots.svg'
                    alt='Icon'
                    title='Icon'
                    width={26}
                    height={24}
                    loading='lazy'
                    className='absolute right-2 bottom-3 cursor-pointer '
                />
            </div>

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className='fixed top-0 left-0 w-screen h-screen bg-black-8 bg-opacity-10 flex flex-col items-center justify-center z-[4]'
                >
                    <img src={src} alt={alt} width={width} height={height} className='rounded-lg' />
                </div>
            )}
        </>
    )
}
