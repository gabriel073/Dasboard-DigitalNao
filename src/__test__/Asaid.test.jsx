import Aside from '../components/Aside';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test } from 'vitest';


beforeEach(() => {
    render(
        <MemoryRouter>
            <Aside />
        </MemoryRouter>
    )
})

describe('Testing navigation Aside', () => {
    test('should text to the correct routes', () => {
        expect(screen.queryByText(/Dashboard/i)).toBeDefined();
        expect(screen.queryByText(/Home/i)).toBeDefined();
        expect(screen.queryByText(/Order/i)).toBeDefined();
        expect(screen.queryByText(/Products/i)).toBeDefined();
        expect(screen.queryByText(/Shipping/i)).toBeDefined();
        expect(screen.queryByText(/Payments/i)).toBeDefined();
        expect(screen.queryByText(/Settings/i)).toBeDefined();
    });

    test('should navigate to the correct routes', () => {
        const dashboardLink = screen.queryByText(/Dashboard/i);
        const homeLink = screen.queryByText(/Home/i);
        const orderLink = screen.queryByText(/Order/i);
        const productsLink = screen.queryByText(/Products/i);
        const shippingLink = screen.queryByText(/Shipping/i);
        const paymentsLink = screen.queryByText(/Payments/i);
        const settingsLink = screen.queryByText(/Settings/i);

        // Test navigation links
        expect(dashboardLink.closest('a')).toHaveAttribute('href', '/');
        expect(homeLink.closest('a')).toHaveAttribute('href', '/home');
        expect(orderLink.closest('a')).toHaveAttribute('href', '/order');
        expect(productsLink.closest('a')).toHaveAttribute('href', '/products');
        expect(shippingLink.closest('a')).toHaveAttribute('href', '/shipping');
        expect(paymentsLink.closest('a')).toHaveAttribute('href', '/payments');
        expect(settingsLink.closest('a')).toHaveAttribute('href', '/settings');
    });

    test('should toggle theme when power button is clicked', () => {

        const powerButton = document.querySelector('button');
        fireEvent.click(powerButton);

        // Check if the theme is toggled
        expect(document.querySelector('html')).toHaveClass('dark');

        fireEvent.click(powerButton);

        // Check if the theme is toggled back
        expect(document.querySelector('html')).not.toHaveClass('dark');
    });


});

