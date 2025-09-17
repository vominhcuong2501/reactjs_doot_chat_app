import { Input } from '@/components'
import { LIST_MOJI } from '@/mockup'
import { useEffect, useRef, useState } from 'react'

export const PopupMoji = () => {
    const [showPicker, setShowPicker] = useState(false)

    const pickerRef = useRef<HTMLDivElement>(null)

    const [inputValue, setInputValue] = useState('')
    const addEmoji = (emoji: string) => {
        setInputValue((prev) => prev + emoji)
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setShowPicker(false)
            }
        }

        if (showPicker) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showPicker])

    return (
        <>
            <img
                src='/images/message/bx-smile.svg'
                alt='Moji'
                title='Moji'
                width={22}
                height={22}
                loading='lazy'
                className={`cursor-pointer hover-green-icon icon-dark-mode ${showPicker && 'filter-green-icon'}`}
                onClick={() => setShowPicker(!showPicker)}
            />
            <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type='text'
                name='message'
                placeholder='Type your message...'
                className='flex-1'
                classNameInput=' text-gray-2 dark:text-gray-4 text-14 rounded-md border border-gray-6 p-2 md:px-4 md:py-3'
            />
            {showPicker && (
                <div
                    className='scrollbar absolute bottom-20 left-4 lg:left-6 bg-white p-2 rounded-md max-w-[250px] max-h-[200px] w-full overflow-y-auto grid grid-cols-6 gap-1 gap-y-2 shadow-sm z-[3] text-center'
                    ref={pickerRef}
                >
                    {LIST_MOJI?.map((emoji, index) => (
                        <p key={index} className='text-20 cursor-pointer' onClick={() => addEmoji(emoji)}>
                            {emoji}
                        </p>
                    ))}
                </div>
            )}
        </>
    )
}
