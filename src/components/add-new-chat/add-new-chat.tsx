import { ListContact } from '@/pages/contacts/components/list-contact'
import React, { useState } from 'react'
import { Modal } from '../modal'

import config from './../../config/config.json'
import { IMAGE_LAZY } from '@/constant'

export const AddNewChat = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <img
                src='/images/chats/icon-plus.svg'
                alt={config.txt_add}
                title={config.txt_add}
                width={31}
                height={30}
                loading={IMAGE_LAZY}
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
