/* eslint-disable no-unused-vars */
'use client'

import type { ChangeEvent, InputHTMLAttributes } from 'react'
import { forwardRef, useState } from 'react'
import { HideIcon, ViewIcon } from '../icons'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string
    classNameInput?: string
    classNameError?: string
    classNameIcon?: string
    id?: string
    nameLabel?: string
    classNameLabel?: string
}

enum INPUT_TYPES {
    text = 'text',
    password = 'password',
    email = 'email',
    number = 'number',
    tel = 'tel'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    {
        errorMessage,
        className,
        classNameInput,
        classNameError = 'absolute -bottom-4 left-0 text-12',
        classNameIcon = 'absolute top-10 right-3 cursor-pointer',
        id,
        placeholder,
        nameLabel,
        classNameLabel,
        type,
        ...restParams
    }: InputProps,
    ref
) {
    const [visible, setVisible] = useState(false)

    const formatNumber = (value: string) => {
        return value.replace(/[^\d.]/g, '')
    }

    const toggleVisible = () => setVisible((prev) => !prev)

    const handleType = () => {
        if (type === INPUT_TYPES.password) {
            return visible ? INPUT_TYPES.text : INPUT_TYPES.password
        }

        return type
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/ {2,}/g, ' ')
        const formattedValue = formatNumber(rawValue)
        e.target.value = type === 'number' || type === 'tel' ? formattedValue : rawValue
    }

    return (
        <div className={`${className}`}>
            <div className='flex flex-col relative gap-2 lg:gap-2.5'>
                {nameLabel && (
                    <div className='flex w-fit'>
                        <label
                            htmlFor={id}
                            className={`font-medium text-black-1 ${classNameLabel}`}
                            dangerouslySetInnerHTML={{ __html: nameLabel || '' }}
                        ></label>
                    </div>
                )}
                <input
                    ref={ref}
                    onChange={(e) => {
                        handleChange(e)
                        if (restParams?.onChange) {
                            restParams.onChange(e)
                        }
                    }}
                    type={handleType()}
                    className={`text-14 text-gray-1 border border-gray-6 h-[39px] w-full appearance-none rounded px-2.5 placeholder:text-14 placeholder:text-gray-1 focus:outline-none focus:ring-0 bg-white ${classNameInput} ${
                        errorMessage ? 'border-red-500' : 'border-gray-6'
                    }`}
                    placeholder={placeholder}
                    {...restParams}
                />

                <style>
                    {`
                        input::-webkit-outer-spin-button,
                        input::-webkit-inner-spin-button {
                            -webkit-appearance: none;
                            margin: 0;
                        }

                        input[type='number'] {
                            -moz-appearance: textfield;
                        }
                    `}
                </style>

                {errorMessage && (
                    <div
                        className={`text-red-500 ${classNameError}`}
                        dangerouslySetInnerHTML={{ __html: errorMessage }}
                    />
                )}

                {type === INPUT_TYPES.password &&
                    (visible ? (
                        <ViewIcon onClick={toggleVisible} className={classNameIcon} />
                    ) : (
                        <HideIcon onClick={toggleVisible} className={classNameIcon} />
                    ))}
            </div>
        </div>
    )
})
