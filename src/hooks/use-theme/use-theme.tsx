import { STORAGE, THEME } from '@/constant'
import { useEffect, useState, useCallback } from 'react'

export const useDarkMode = () => {
    // get initial theme from localStorage or system preference
    const getInitialTheme = () => {
        try {
            const stored = localStorage.getItem(STORAGE.THEME)
            if (stored === THEME.DARK || stored === THEME.LIGHT) return stored
            return window.matchMedia(`(prefers-color-scheme: ${THEME.DARK})`).matches ? THEME.DARK : THEME.LIGHT
        } catch {
            return THEME.LIGHT
        }
    }

    const [currentTheme, setCurrentTheme] = useState(getInitialTheme)

    // apply theme to document and save to localStorage
    useEffect(() => {
        const root = document.documentElement
        root.classList.toggle(THEME.DARK, currentTheme === THEME.DARK)
        try {
            localStorage.setItem(STORAGE.THEME, currentTheme)
        } catch {
            // Ignore localStorage errors
        }
    }, [currentTheme])

    // listen to system theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia(`(prefers-color-scheme: ${THEME.DARK})`)
        const handleChange = (e: MediaQueryListEvent) => {
            const stored = localStorage.getItem(STORAGE.THEME)
            if (!stored) setCurrentTheme(e.matches ? THEME.DARK : THEME.LIGHT)
        }

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    // toggle theme
    const toggle = useCallback(() => {
        setCurrentTheme((prev) => (prev === THEME.DARK ? THEME.LIGHT : THEME.DARK))
    }, [])

    return {
        theme: currentTheme,
        setTheme: setCurrentTheme,
        toggle,
        isDark: currentTheme === THEME.DARK
    }
}
