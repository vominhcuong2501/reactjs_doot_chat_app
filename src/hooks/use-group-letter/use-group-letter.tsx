import { ContactProps } from '@/types/contact'

// Lấy chữ cái đầu từ tên để hiển thị avatar
export const getInitials = (name?: string) =>
    (name ?? '')
        ?.trim()
        ?.split(/[\s-]+/)
        ?.filter(Boolean)
        ?.map((w) => w[0])
        ?.join('')
        ?.toUpperCase()

// Bỏ dấu, đưa về ASCII để sort/group ổn định
export const normalizeName = (s = '') =>
    s
        ?.normalize('NFD')
        ?.replace(/[\u0300-\u036f]/g, '')
        ?.replace(/đ/g, 'd')
        ?.replace(/Đ/g, 'D')
        ?.toLowerCase()

// Lấy chữ cái đầu, nếu không phải A→Z thì trả về '#'
export const getLetter = (name = '') => {
    const first = normalizeName(name)?.trim()?.charAt(0)?.toUpperCase()
    return /[A-Z]/.test(first) ? first : '#'
}

// So sánh A→Z không phân biệt dấu/hoa-thường
export const compareAZ = (a = '', b = '') => {
    const A = normalizeName(a)?.toUpperCase()
    const B = normalizeName(b)?.toUpperCase()
    if (A < B) return -1
    if (A > B) return 1
    return 0
}

// Nhóm người dùng theo chữ cái đầu
export function groupUsersByFirstLetter(users: ContactProps[]) {
    const map = new Map<string, ContactProps[]>()

    // Tạo map { letter: string, listUser: ContactProps[] }
    for (const u of users) {
        const key = getLetter(u.name)
        if (!map.has(key)) map.set(key, [])
        map.get(key)!.push(u)
    }

    // Sort nhóm A→Z, '#' ở cuối
    const letters = [...map.keys()].sort((a, b) => {
        if (a === '#' && b === '#') return 0
        if (a === '#') return 1
        if (b === '#') return -1
        return a < b ? -1 : a > b ? 1 : 0
    })

    // Trả về đúng cấu trúc { letter, listUser }
    return letters.map((letter) => ({
        letter,
        listUser: map
            .get(letter)!
            .slice()
            .sort((x, y) => compareAZ(x.name, y.name))
    }))
}
