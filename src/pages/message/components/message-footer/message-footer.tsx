import { Button, Input } from '@/components'
import { LIST_MOJI } from '@/mockup'
import { useEffect, useRef, useState } from 'react'

export const MessageFooter = () => {
    const [showPicker, setShowPicker] = useState(false)

    const [inputValue, setInputValue] = useState('')

    const pickerRef = useRef<HTMLDivElement>(null)

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
        <form className='lg:max-h-[93px] lg:h-full p-2 lg:p-6 border-t border-gray-12 dark:border-black-7 flex item-center gap-2 lg:gap-4 relative'>
            <img
                src='/images/message/bx-dots-horizontal-rounded.svg'
                alt='Options'
                title='Options'
                width={22}
                height={22}
                loading='lazy'
                className='cursor-pointer hover-green-icon icon-dark-mode'
            />
            <img
                src='/images/message/bx-smile.svg'
                alt='Mood'
                title='Mood'
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
            <img
                src='/images/message/bx-microphone.svg'
                alt='Microphone'
                title='Microphone'
                width={22}
                height={22}
                loading='lazy'
                className='cursor-pointer hover-green-icon icon-dark-mode'
            />
            <Button>
                <img
                    src='/images/message/bx-sent.svg'
                    alt='Search'
                    title='Search'
                    width={43}
                    height={43}
                    loading='lazy'
                    className='cursor-pointer w-7 h-7 lg:w-[43px] lg:h-[43px] rounded'
                />
            </Button>
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
        </form>
    )
}
