import { ListContact } from '@/pages/contacts/components/list-contact'
import React, { useState } from 'react'
import { Modal } from '../modal'

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

            <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} isIconClose={false}>
                <div className='bg-white min-w-[343px] max-w-[343px] w-full max-h-[70dvh] overflow-y-auto py-4 scrollbar rounded-lg'>
                    <ListContact isShowDot={false} handleClose={() => setIsOpen(false)} />
                </div>
            </Modal>
        </>
    )
}
