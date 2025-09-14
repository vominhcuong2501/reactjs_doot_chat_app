import * as React from 'react'
import { LoadingSpinnerIcon } from '../icons'
import { Link } from 'react-router-dom'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string
    target?: string
    isLoading?: boolean
    reloadDocument?: boolean
    className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            href,
            target = '_self',
            children,
            disabled,
            isLoading,
            title,
            type = 'button',
            reloadDocument,
            ...props
        },
        ref
    ) => {
        if (href) {
            if (reloadDocument) {
                return (
                    <a className={className} href={href} target={target} title={title}>
                        {children}
                    </a>
                )
            }

            return (
                <Link className={className} to={href} target={target} title={title}>
                    {children}
                </Link>
            )
        }

        return (
            <button
                className={`flex justify-center items-center gap-1 ${className}`}
                ref={ref}
                type={type}
                title={title}
                disabled={disabled}
                {...props}
            >
                {children}
                {isLoading && <LoadingSpinnerIcon className='mx-2 inline h-4 w-4 animate-spin fill-white' />}
            </button>
        )
    }
)
Button.displayName = 'Button'

export { Button }
