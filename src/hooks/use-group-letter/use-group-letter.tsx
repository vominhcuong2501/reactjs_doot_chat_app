import { TYPE_DOCUMENT } from '@/constant'
import { ContactProps } from '@/types/contact'

// Get initials from name for avatar display
export const getInitials = (name?: string) =>
    (name ?? '')
        ?.trim()
        ?.split(/[\s-]+/)
        ?.filter(Boolean)
        ?.map((w) => w[0])
        ?.join('')
        ?.toUpperCase()

// Remove accents, convert to ASCII for stable sorting/grouping
export const normalizeName = (s = '') =>
    s
        ?.normalize('NFD')
        ?.replace(/[\u0300-\u036f]/g, '')
        ?.replace(/đ/g, 'd')
        ?.replace(/Đ/g, 'D')
        ?.toLowerCase()

// Get the first letter, if not A-Z then return TYPE_DOCUMENT.OTHER
export const getLetter = (name = '') => {
    const first = normalizeName(name)?.trim()?.charAt(0)?.toUpperCase()
    return /[A-Z]/.test(first) ? first : TYPE_DOCUMENT.OTHER
}

// Compare A-Z, accent/uppercase-insensitive
export const compareAZ = (a = '', b = '') => {
    const A = normalizeName(a)?.toUpperCase()
    const B = normalizeName(b)?.toUpperCase()
    if (A < B) return -1
    if (A > B) return 1
    return 0
}

// Group users by first letter
export function groupUsersByFirstLetter(users: ContactProps[]) {
    const map = new Map<string, ContactProps[]>()

    // Create map { letter: string, listUser: ContactProps[] }
    for (const u of users) {
        const key = getLetter(u.name)
        if (!map.has(key)) map.set(key, [])
        map.get(key)!.push(u)
    }

    // Sort groups A-Z, TYPE_DOCUMENT.OTHER at the end
    const letters = [...map.keys()].sort((a, b) => {
        if (a === TYPE_DOCUMENT.OTHER && b === TYPE_DOCUMENT.OTHER) return 0
        if (a === TYPE_DOCUMENT.OTHER) return 1
        if (b === TYPE_DOCUMENT.OTHER) return -1
        return a < b ? -1 : a > b ? 1 : 0
    })

    // Return correct structure { letter, listUser }
    return letters.map((letter) => ({
        letter,
        listUser: map
            .get(letter)!
            .slice()
            .sort((x, y) => compareAZ(x.name, y.name))
    }))
}
