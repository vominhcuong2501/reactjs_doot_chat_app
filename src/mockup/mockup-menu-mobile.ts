import { PAGE_KEYWORD } from "@/constant";
import config from './../config/config.json'

export const MENU_MOBILE = [
    {
        name: config.txt_chats,
        key: PAGE_KEYWORD.CHATS,
        icon: '/images/sidebar/bx-conversation.png'
    },
    {
        name: config.txt_calls,
        key: PAGE_KEYWORD.CALLS,
        icon: '/images/sidebar/bx-phone-call.png'
    },
    {
        name: config.txt_contacts,
        key: PAGE_KEYWORD.CONTACTS,
        icon: '/images/sidebar/bxs-user-detail.png'
    }
]
