import { Modal } from '@/components'
import { useState } from 'react'
import { PopupInfo } from '../popup-info'
import { IMAGE_LAZY } from '@/constant'
import config from './../../../../config/config.json'
import { ContactProps } from '@/types'

export const IconInformation = ({infoUser}: {infoUser?: ContactProps}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <img
                src='/images/message/bxs-info-circle.svg'
                alt={config.txt_icon}
                title={config.txt_icon}
                width={22}
                height={22}
                loading={IMAGE_LAZY}
                className='cursor-pointer hover-green-icon icon-dark-mode'
                onClick={() => setIsOpen(!isOpen)}
            />
            <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} isIconClose={false}>
                <PopupInfo handleClose={() => setIsOpen(false)} infoUser={infoUser} />
            </Modal>
        </>
    )
}
