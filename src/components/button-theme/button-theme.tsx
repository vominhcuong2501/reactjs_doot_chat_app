import { useDarkMode } from '@/hooks'
import config from './../../config/config.json'
import { IMAGE_LAZY } from '@/constant'

export const ButtonTheme = ({ className }: { className?: string }) => {
    const { isDark, toggle } = useDarkMode()

    return (
        <button onClick={toggle} className='cursor-pointer hover-green-icon'>
            <span>
                {isDark ? (
                    <img
                        src='/images/sidebar/bx-moon.png'
                        alt={config.txt_dark_mode}
                        title={config.txt_dark_mode}
                        width={24}
                        height={24}
                        className={className}
                        loading={IMAGE_LAZY}
                    />
                ) : (
                    <img
                        src='/images/sidebar/bx-sun.png'
                        alt={config.txt_light_mode}
                        title={config.txt_light_mode}
                        width={24}
                        height={24}
                        className={className}
                        loading={IMAGE_LAZY}
                    />
                )}
            </span>
        </button>
    )
}
