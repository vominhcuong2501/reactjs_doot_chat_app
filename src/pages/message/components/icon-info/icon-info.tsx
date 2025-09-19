import { Modal } from '@/components'
import { useState } from 'react'
import { PopupInfo } from '../popup-info'

export const IconInformation = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <img
                src='/images/message/bxs-info-circle.svg'
                alt='Icon'
                title='Icon'
                width={22}
                height={22}
                loading='lazy'
                className='cursor-pointer hover-green-icon icon-dark-mode'
                onClick={() => setIsOpen(!isOpen)}
            />
            <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)} isIconClose={false}>
                <PopupInfo handleClose={() => setIsOpen(false)} />
            </Modal>
        </>
    )
}
