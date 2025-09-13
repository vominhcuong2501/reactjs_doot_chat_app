import { useDarkMode } from '@/hooks'

export const ButtonTheme = () => {
    const { isDark, toggleTheme } = useDarkMode()

    return (
        <button
            onClick={toggleTheme}
            className='inline-flex items-center gap-2 rounded-xl px-3 py-2 border
                 bg-white text-slate-900 hover:bg-slate-50
                 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700 dark:hover:bg-slate-800
                 transition'
            aria-label='Toggle dark mode'
        >
            <span className='size-4' aria-hidden>
                {isDark ? (
                    <svg viewBox='0 0 24 24' fill='currentColor'>
                        <path d='M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9-10v2h3v-2h-3zm-3.24 7.16l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM13 1h-2v3h2V1zm-7.07 14.95l-1.8 1.79 1.41 1.41 1.79-1.8-1.4-1.4zM12 7a5 5 0 100 10 5 5 0 000-10z' />
                    </svg>
                ) : (
                    <svg viewBox='0 0 24 24' fill='currentColor'>
                        <path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' />
                    </svg>
                )}
            </span>
        </button>
    )
}
