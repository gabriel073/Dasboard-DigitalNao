import React from 'react';
import { render, } from '@testing-library/react';
import Modal from 'react-modal';
import Aside from '../components/Aside';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';
import { describe, test } from 'vitest';


Modal.setAppElement(document.body);

describe('Home Component', () => {

    test('should render the component Aside in Home', () => {
        render(
            <MemoryRouter>
                <Aside />
            </MemoryRouter>
        );
    })
    test('should render the components Header in Home', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        )
    })
})
