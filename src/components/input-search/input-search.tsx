export const InputSearch = ({
    className,
    classNameInput,
    classIcon,
    setKeySearch
}: {
    className?: string
    classNameInput?: string
    classIcon?: string
    setKeySearch?: (value: string) => void
}) => {
    return (
        <div className={className}>
            <input
                type='text'
                placeholder='Search here...'
                className={`w-full bg-gray-5 dark:bg-black-2 dark:text-gray-4 dark:placeholder:text-gray-4 text-14 text-gray-1 placeholder:text-gray-1 placeholder:text-14 focus:outline-0 px-4 py-2.5 ${classNameInput}`}
                onChange={(e) => setKeySearch?.(e.target.value)}
            />
            <img
                src='/images/chats/bx-search.svg'
                alt='Search'
                title='Search'
                width={15}
                height={15}
                loading='lazy'
                className={`absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer ${classIcon} `}
            />
        </div>
    )
}
