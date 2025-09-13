import { useDarkMode } from '@/hooks'

export const ButtonTheme = ({ className }: { className?: string }) => {
    const { isDark, toggleTheme } = useDarkMode()

    return (
        <button onClick={toggleTheme} aria-label='Toggle dark mode'>
            <span className='size-4' aria-hidden>
                {isDark ? (
                    <img
                        src='/images/sidebar/bx-moon.png'
                        alt='Dark mode'
                        width={24}
                        height={24}
                        className={className}
                    />
                ) : (
                    <img
                        src='/images/sidebar/bx-sun.png'
                        alt='Light mode'
                        width={24}
                        height={24}
                        className={className}
                    />
                )}
            </span>
        </button>
    )
}
