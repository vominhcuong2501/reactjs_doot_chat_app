import { STORAGE } from '@/constant'
import { useState, useEffect, useCallback } from 'react'

export const useSidebar = () => {
    const [keyword, setKeyword] = useState<string>('')

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE.SIDEBAR)
        if (stored) {
            setKeyword(stored)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(STORAGE.SIDEBAR, keyword)
    }, [keyword])

    const updateKeyword = useCallback((value: string) => {
        setKeyword(value)
    }, [])

    return { keyword, updateKeyword }
}
