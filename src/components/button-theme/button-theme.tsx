import { useDarkMode } from '@/hooks'

export const ButtonTheme = ({ className }: { className?: string }) => {
    const { isDark, toggle } = useDarkMode()

    return (
        <button onClick={toggle} aria-label='Toggle dark mode'>
            <span className='size-4' aria-hidden>
                {isDark ? (
                    <img
                        src='/images/sidebar/bx-moon.png'
                        alt='Dark mode'
                        title='Dark mode'
                        width={24}
                        height={24}
                        className={className}
                        loading='lazy'
                    />
                ) : (
                    <img
                        src='/images/sidebar/bx-sun.png'
                        alt='Light mode'
                        title='Light mode'
                        width={24}
                        height={24}
                        className={className}
                        loading='lazy'
                    />
                )}
            </span>
        </button>
    )
}
