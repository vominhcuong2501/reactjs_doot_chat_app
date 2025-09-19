import { DATA_ACCOUNT, PAGE_NAME } from '@/constant'
import { ProfileAttachedFile, ProfileDetail, ProfileMedia, ProfileUser } from './components'

export const Profile = () => {
    return (
        <div className='text-black-1'>
            <ProfileUser name={DATA_ACCOUNT.NAME} position={DATA_ACCOUNT.POSITION} title={PAGE_NAME.PROFILE} />
            <div className='p-4 lg:p-6'>
                <ProfileDetail />
                <ProfileMedia />
                <ProfileAttachedFile />
            </div>
        </div>
    )
}
