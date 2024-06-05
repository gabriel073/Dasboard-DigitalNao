import { describe, test } from 'vitest';
import { render, screen, } from '@testing-library/react';
import CardBestSellers from '../components/CardBestSellers';
import RecentSales from '../components/RecentSales';

describe('Testing MainHome Component', () => {
    test('should cards components header in the MainHome page', () => {
        expect(screen.queryByText(/Customers/i)).toBeDefined();
        expect(screen.queryByText(/Total Sales/i)).toBeDefined();
    })

    test('should rendering the  components in the MainHome page', () => {
        render(
            <>
                <CardBestSellers />
                <RecentSales />
            </>
        )
        expect(screen.queryByText(/Best Sellers/i)).toBeDefined();
        expect(screen.queryByText(/Recent Sales/i)).toBeDefined();
        expect(screen.queryByText(/countries that choose us/i)).toBeDefined();
    })

})