import { render, screen } from '@testing-library/react';
import Button from '../components/KeyboardButton';

describe('Button', () => {
    it('renders the button with correct customization', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    })
})