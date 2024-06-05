import { describe, test } from 'vitest';
import { render, screen, } from '@testing-library/react';


describe('Renderization the components ', () => {

    test('should cards components header in the home page', () => {
        expect(screen.queryByText(/shipped orders/i)).toBeDefined();
        expect(screen.queryByText(/pending orders/i)).toBeDefined();
        expect(screen.queryByText(/new orders/i)).toBeDefined();
    })

    test('should card component view Details in the home page', () => {
        expect(screen.queryByText(/view Details/i)).toBeDefined();

    })
    test('should card component Recent Activity in the home page', () => {
        expect(screen.queryByText(/Recent Activity/i)).toBeDefined();

    })
    test('should card component Today´s Trends in the home page', () => {
        expect(screen.queryByText(/Today´s Trends/i)).toBeDefined();

    })



})