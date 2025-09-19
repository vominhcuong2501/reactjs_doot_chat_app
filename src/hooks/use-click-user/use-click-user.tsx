import { useDisplay } from '../use-display'
import { useNavigate } from 'react-router-dom'
import { ContactProps } from '@/types'
import { useContext } from 'react'
import { AppContext } from '@/contexts/app.context'
import { PAGE_KEYWORD, SCREEN_DEVICE } from '@/constant'

export const useClickUser = () => {
    const { updateUserData } = useContext(AppContext)

    const isMobile = useDisplay(SCREEN_DEVICE.MOBILE)

    const navigate = useNavigate()

    const handleClickUser = (user: ContactProps) => {
        if (isMobile) {
            navigate(`/${PAGE_KEYWORD.MESSAGE}/${user?.id}`)
            updateUserData(user)
        } else {
            updateUserData(user)
        }
    }

    return handleClickUser
}
