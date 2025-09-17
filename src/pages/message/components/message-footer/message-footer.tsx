import { Button } from '@/components'
import { PopupMoji } from '../popup-moji'

export const MessageFooter = () => {
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
            <PopupMoji />
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
                    alt='Submit'
                    title='Submit'
                    width={43}
                    height={43}
                    loading='lazy'
                    className='cursor-pointer w-7 h-7 lg:w-[43px] lg:h-[43px] rounded'
                />
            </Button>
        </form>
    )
}
