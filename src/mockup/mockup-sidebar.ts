import { PAGE_KEYWORD, PAGE_NAME } from "@/constant";


export const SIDEBAR = [
    { name: PAGE_NAME.PROFILE, key: '', icon: '/images/sidebar/bx-user-circle.png' },
    {
        name: PAGE_NAME.CHATS,
        key: PAGE_KEYWORD.CHATS,
        icon: '/images/sidebar/bx-conversation.png'
    },
    {
        name: PAGE_NAME.CONTACTS,
        key: PAGE_KEYWORD.CONTACTS,
        icon: '/images/sidebar/bxs-user-detail.png'
    },
    {
        name: PAGE_NAME.CALLS,
        key: PAGE_KEYWORD.CALLS,
        icon: '/images/sidebar/bx-phone-call.png'
    },
    {
        name: PAGE_NAME.BOOKMARK,
        key: PAGE_KEYWORD.BOOKMARK,
        icon: '/images/sidebar/bx-bookmarks.png'
    },
    {
        name: PAGE_NAME.SETTINGS,
        key: PAGE_KEYWORD.SETTINGS,
        icon: '/images/sidebar/bx-settings.png'
    },
    {
        name: PAGE_NAME.CHANGE_PASSWORD,
        key: PAGE_KEYWORD.CHANGE_PASSWORD,
        icon: '/images/profile/bxs-lock.svg'
    }
]
