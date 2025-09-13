import { useEffect, useState, useCallback } from 'react'

export const useDarkMode = () => {
    const getInitial = () => {
        try {
            const ls = localStorage.getItem('theme')
            if (ls === 'dark' || ls === 'light') return ls
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        } catch {
            return 'light'
        }
    }

    const [theme, setTheme] = useState(getInitial)

    useEffect(() => {
        const root = document.documentElement
        if (theme === 'dark') root.classList.add('dark')
        else root.classList.remove('dark')
        try {
            localStorage.setItem('theme', theme)
        } catch {
            // Intentionally left blank: ignore localStorage errors
        }
    }, [theme])

    // cập nhật khi hệ thống đổi theme (nếu user chưa khóa thủ công)
    useEffect(() => {
        const mql = window.matchMedia('(prefers-color-scheme: dark)')
        const handler = (e: MediaQueryListEvent) => {
            const ls: string | null = localStorage.getItem('theme')
            if (!ls) setTheme(e.matches ? 'dark' : 'light')
        }
        if (mql.addEventListener) mql.addEventListener('change', handler)
        else mql.addListener(handler)
        return () => {
            if (mql.removeEventListener) mql.removeEventListener('change', handler)
            else mql.removeListener(handler)
        }
    }, [])

    const toggleTheme = useCallback(() => {
        setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
    }, [])

    return { theme, setTheme, toggleTheme, isDark: theme === 'dark' }
}
