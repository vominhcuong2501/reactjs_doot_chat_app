import { PROFILE_PAGE } from '@/constant'
import { ProfileAttachedFile, ProfileDetail, ProfileMedia, ProfileUser } from './components'

export const Profile = () => {
    return (
        <div className='text-black-1'>
            <ProfileUser name='Adam Zampa' position='Front end Developer' title={`My ${PROFILE_PAGE}`} />
            <div className='p-4 lg:p-6'>
                <ProfileDetail />
                <ProfileMedia />
                <ProfileAttachedFile />
            </div>
        </div>
    )
}
