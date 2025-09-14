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
    classNameTooltip?: string
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
        classNameError = 'absolute -bottom-5 left-0',
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

    const toggleVisible = () => {
        setVisible((prev) => !prev)
    }

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
        <div className={`${className} text-14`}>
            <div className='flex flex-col relative gap-2'>
                {nameLabel && (
                    <div className='flex gap-1 w-fit'>
                        <label
                            htmlFor={id}
                            className={`font-semibold text-black ${
                                restParams.required && 'label-required'
                            } ${classNameLabel}`}
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
                    className={`text-md text-black border-gray-6 h-13 w-full appearance-none rounded-xl border px-2.5 placeholder:text-md placeholder:text-placeholder focus:outline-none focus:ring-0 ${
                        errorMessage && 'border-primary'
                    } ${classNameInput}`}
                    placeholder={placeholder}
                    {...restParams}
                />

                {errorMessage && (
                    <div
                        className={`text-primary ${classNameError}`}
                        dangerouslySetInnerHTML={{ __html: errorMessage }}
                    ></div>
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
