import { ListContact } from '@/pages/contacts/components/list-contact'
import React, { useState } from 'react'

export const AddNewChat = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <img
                src='/images/chats/icon-plus.svg'
                alt='Add'
                width={31}
                height={30}
                loading='lazy'
                className='cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            />

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className='fixed top-0 left-0 w-screen h-screen bg-black-8 bg-opacity-10 flex flex-col items-center justify-center z-[4]'
                >
                    <div className='bg-white max-w-[343px] w-full max-h-[70dvh] overflow-y-auto py-4 scrollbar rounded-lg'>
                        <ListContact isShowdot={false} />
                    </div>
                </div>
            )}
        </>
    )
}
