import { Input } from '@/components'

export const FormChangePassword = () => {
    return (
        <form className='relative z-[2] mt-4 lg:mt-6 flex flex-col gap-4' noValidate>
            <Input
                type='password'
                id='current_password'
                nameLabel='Old Password'
                required
                maxLength={20}
                minLength={6}
                autoComplete='current-password'
            />
            <Input
                type='password'
                id='new_password'
                nameLabel='New Password'
                required
                maxLength={20}
                minLength={6}
                autoComplete='current-password'
            />
            <Input
                type='password'
                id='confirm_password'
                nameLabel='Confirm New Password'
                required
                maxLength={20}
                minLength={6}
                autoComplete='confirm-password'
            />
            <div className='grid grid-cols-2 gap-5 mt-2'>
                <button
                    type='submit'
                    className='text-white text-15 rounded h-10 w-full border border-green-6 bg-green-6 transition-all duration-200 hover:bg-white hover:text-green-6 flex flex-col items-center justify-center text-center cursor-pointer'
                >
                    Save
                </button>
                <button className='text-black-6 text-15 rounded h-10 w-full bg-gray-5 border border-transparent hover:border-gray-1 transition-all duration-200 flex flex-col items-center justify-center text-center cursor-pointer'>
                    Cancel
                </button>
            </div>
        </form>
    )
}
