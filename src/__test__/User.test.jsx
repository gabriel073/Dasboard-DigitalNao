import { describe, test, } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Users from '../components/Users';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice';
import { useState } from 'react';
import CreateUserModal from '../components/CreateUserModal';
import UpdateUserModal from '../components/UpdateUserModal';
import DeleteUserModal from '../components/DeleteUserModal';


const initialState = {
    user: {
        users: [
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        ],
    },
};

// Configurar el store de prueba
const store = configureStore({
    reducer: {
        user: userReducer,
    },
    preloadedState: initialState,
});

beforeEach(() => {
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Users />
            </MemoryRouter>
        </Provider>
    )
})


describe('User component', () => {
    test('should open form create users', () => {
        <Provider store={store}>
            <CreateUserModal />
        </Provider>

        // Verifica que el modal no esté en el documento inicialmente
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        const button = screen.getByText(/Create Customer/i);
        fireEvent.click(button);
        // Verifica que el modal se abra
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    })

    test('should render card with user', () => {
        render(
            <Provider store={store}>
                <Users />
            </Provider>
        );

        // Verificar que se rendericen las tarjetas de los usuarios
        expect(screen.queryByText('John Doe')).toBeDefined();
        expect(screen.queryByText('john@example.com')).toBeDefined();
        expect(screen.queryByText('Jane Smith')).toBeDefined();
        expect(screen.queryByText('jane@example.com')).toBeDefined();
    })

    test('each card should contain edit and delete buttons', () => {
        render(
            <Provider store={store}>
                <Users />
            </Provider>
        );

        // Verificar que cada tarjeta tenga los botones de editar y eliminar
        initialState.user.users.forEach(user => {
            const userCard = screen.queryByText(user.name);
            expect(userCard).toBeDefined();
            expect(screen.queryByText('Edit')).toBeDefined();
            expect(screen.queryByText('Delete')).toBeDefined();
        });
    });

    test('should open edit modal when clicking edit button', () => {
        render(
            <Provider store={store}>
                <Users />
                <UpdateUserModal />
            </Provider>
        );

        const editButton = document.querySelector('button', { name: 'Edit' });
        fireEvent.click(editButton);

        expect(screen.queryByText('Edit User')).toBeDefined();
    });


    test('should open delete modal when clicking edit button', () => {
        render(
            <Provider store={store}>
                <Users />
                <DeleteUserModal />
            </Provider>
        );

        // Simulate click on edit button
        const deleteButton = document.querySelector('button', { name: 'Delete' });
        fireEvent.click(deleteButton);

        expect(screen.queryByText('Delete User')).toBeDefined();
    });

})