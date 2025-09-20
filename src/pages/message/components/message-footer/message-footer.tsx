import { Button } from '@/components'
import { PopupMoji } from '../popup-moji'
import { IMAGE_LAZY } from '@/constant'
import config from './../../../../config/config.json'

export const MessageFooter = () => {
    return (
        <form className='lg:max-h-[93px] lg:h-full p-2 lg:p-6 border-t border-gray-12 dark:border-black-7 flex item-center gap-2 lg:gap-4 relative'>
            <img
                src='/images/message/bx-dots-horizontal-rounded.svg'
                alt={config.txt_options}
                title={config.txt_options}
                width={22}
                height={22}
                loading={IMAGE_LAZY}
                className='cursor-pointer hover-green-icon icon-dark-mode'
            />
            <PopupMoji />
            <img
                src='/images/message/bx-microphone.svg'
                alt={config.txt_microphone}
                title={config.txt_microphone}
                width={22}
                height={22}
                loading={IMAGE_LAZY}
                className='cursor-pointer hover-green-icon icon-dark-mode'
            />
            <Button>
                <img
                    src='/images/message/bx-sent.svg'
                    alt={config.txt_submit}
                    title={config.txt_submit}
                    width={43}
                    height={43}
                    loading={IMAGE_LAZY}
                    className='cursor-pointer w-7 h-7 lg:w-[43px] lg:h-[43px] rounded'
                />
            </Button>
        </form>
    )
}
