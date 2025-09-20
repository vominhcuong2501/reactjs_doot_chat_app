import React from 'react'
import { CloseIcon } from '../icons/close-icon'
import config from './../../config/config.json'

interface ModalProps {
    children?: React.ReactNode
    className?: string
    isOpen?: boolean
    handleClose?: () => void
    isIconClose?: boolean
}

export const Modal = ({ children, className, isOpen, handleClose, isIconClose = true }: ModalProps) => {
    return (
        <>
            {isOpen && (
                <div
                    className='fixed inset-0 w-screen h-screen bg-black-8 bg-opacity-10 z-[3] cursor-pointer'
                    title={config.txt_close}
                    onClick={handleClose}
                ></div>
            )}

            {isIconClose && isOpen && (
                <CloseIcon
                    className='fixed top-4 right-4 cursor-pointer z-[6] border border-white p-1 rounded-full fill-white w-8 h-8 hover:border-green-1 hover:bg-green-1 transition-all duration-200'
                    onClick={handleClose}
                />
            )}

            <div
                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[4] transition-all duration-300 ${
                    isOpen ? 'scale-100' : 'scale-0'
                } ${className}`}
            >
                {children}
            </div>
        </>
    )
}
