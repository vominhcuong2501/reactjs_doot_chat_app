import { useEffect, useState, useCallback } from 'react'

export const useDarkMode = () => {
    // get initial theme from localStorage or system preference
    const getInitialTheme = () => {
        try {
            const stored = localStorage.getItem('theme')
            if (stored === 'dark' || stored === 'light') return stored
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        } catch {
            return 'light'
        }
    }

    const [currentTheme, setCurrentTheme] = useState(getInitialTheme)

    // apply theme to document and save to localStorage
    useEffect(() => {
        const root = document.documentElement
        root.classList.toggle('dark', currentTheme === 'dark')
        try {
            localStorage.setItem('theme', currentTheme)
        } catch {
            // Ignore localStorage errors
        }
    }, [currentTheme])

    // listen to system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = (e: MediaQueryListEvent) => {
            const stored = localStorage.getItem('theme')
            if (!stored) setCurrentTheme(e.matches ? 'dark' : 'light')
        }

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    // toggle theme
    const toggle = useCallback(() => {
        setCurrentTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }, [])

    return {
        theme: currentTheme,
        setTheme: setCurrentTheme,
        toggle,
        isDark: currentTheme === 'dark'
    }
}
