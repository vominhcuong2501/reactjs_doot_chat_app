export const Chats = () => {
    return (
        <div className='p-4 lg:p-6'>
            <div className='flex items-center justify-between'>
                <h1 className='text-21 font-medium text-black-1 dark:text-gray-3'>Chats</h1>
                <p className='w-[30px] h-[30px] rounded bg-green-4 flex flex-col items-center justify-center text-green-1 text-20 font-medium cursor-pointer'>
                    +
                </p>
            </div>
            <div>
                <input type='text' placeholder='Search here..' />
            </div>
        </div>
    )
}
