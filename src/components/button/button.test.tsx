import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'
import { BrowserRouter } from 'react-router-dom'

describe('Button component', () => {
    it('renders the button children', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByText('Click me')).toBeInTheDocument()
    })

    it('renders as <a> when href and reloadDocument are provided', () => {
        render(
            <Button href='/test' reloadDocument>
                Link
            </Button>
        )
        const link = screen.getByText('Link').closest('a')
        expect(link).toHaveAttribute('href', '/test')
    })

    it('renders as <Link> when href is provided without reloadDocument', () => {
        render(
            <BrowserRouter>
                <Button href='/test'>Router Link</Button>
            </BrowserRouter>
        )
        const link = screen.getByText('Router Link').closest('a')
        expect(link).toHaveAttribute('href', '/test')
    })

    it('shows loading spinner when isLoading is true', () => {
        render(<Button isLoading>Loading</Button>)
        expect(screen.getByText('Loading')).toBeInTheDocument()
        expect(screen.getByRole('button').querySelector('.animate-spin')).toBeInTheDocument()
    })

    it('passes title prop', () => {
        render(<Button title='Test title'>Title</Button>)
        expect(screen.getByTitle('Test title')).toBeInTheDocument()
    })

    it('calls onClick when clicked', () => {
        const handleClick = vi.fn()
        render(<Button onClick={handleClick}>Click</Button>)
        fireEvent.click(screen.getByText('Click'))
        expect(handleClick).toHaveBeenCalled()
    })

    it('is disabled when disabled prop is true', () => {
        render(<Button disabled>Disabled</Button>)
        expect(screen.getByRole('button')).toBeDisabled()
    })
})
