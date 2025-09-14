'use client'

import { ReactNode, useState } from 'react'

export const ToggleItem = ({ title, icon, children }: { title?: string; icon?: string; children?: ReactNode }) => {
    const [openStates, setOpenStates] = useState<boolean>(false)

    const toggleHandler = () => {
        setOpenStates(!openStates)
    }

    return (
        <div className=''>
            <div
                className={`flex items-center justify-between cursor-pointer px-4 lg:px-6 py-[14px] hover:bg-green-1 transition-all duration-200 hover-white-icon group border-y border-gray-11 dark:border-black-2 ${
                    openStates ? 'bg-gray-10 dark:bg-black-2' : ''
                }`}
                onClick={() => toggleHandler()}
            >
                <div className='flex gap-4 items-center w-full'>
                    <img
                        src={icon || '/'}
                        alt={title || ''}
                        title={title}
                        loading='lazy'
                        width='14'
                        height='14'
                        className='icon-hover icon-dark-mode'
                    />
                    <h3 className='group-hover:text-white dark:text-gray-3'>{title}</h3>
                </div>
                <img
                    src='/images/profile/icon-toggle-dropdown.svg'
                    alt={title || ''}
                    title={title}
                    loading='lazy'
                    width='12'
                    height='12'
                    className={`transition-all duration-200 icon-hover icon-dark-mode ${
                        openStates ? 'rotate-180' : ''
                    }`}
                />
            </div>
            <div
                className={`grid overflow-hidden transition-all ${openStates ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
                <div className='min-h-0 overflow-hidden'>{children}</div>
            </div>
        </div>
    )
}
