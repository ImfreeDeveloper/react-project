import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { render, screen } from '@testing-library/react'

describe('button', () => {
    test('with only first param', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('with only first param', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug();
    })
})