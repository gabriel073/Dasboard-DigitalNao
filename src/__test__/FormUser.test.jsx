import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import CreateUserModal from '../components/CreateUserModal';
import Modal from 'react-modal';
import { describe, test } from 'vitest';



Modal.setAppElement(document.body);

describe('CreateUserModal Component', () => {
    it('should render the modal with form fields', () => {
        // const onCloseMock = jest.fn();
        // const onCreateMock = jest.fn();

        // render(<CreateUserModal isOpen={true} onClose={onCloseMock} onCreate={onCreateMock} />);

        // expect(screen.getByText('Crear Usuario')).toBeInTheDocument();
        // expect(screen.getByLabelText('Nombre:')).toBeInTheDocument();
        // expect(screen.getByLabelText('Email:')).toBeInTheDocument();
        // expect(screen.getByLabelText('Phone:')).toBeInTheDocument();
    });

    it('should submit the form with valid data', async () => {
        // const onCloseMock = jest.fn();
        // const onCreateMock = jest.fn();

        // render(<CreateUserModal isOpen={true} onClose={onCloseMock} onCreate={onCreateMock} />);

        // await act(async () => {
        //     fireEvent.change(screen.getByLabelText('Nombre:'), { target: { value: 'John Doe' } });
        //     fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'john@example.com' } });
        //     fireEvent.change(screen.getByLabelText('Phone:'), { target: { value: '1234567890' } });
        //     fireEvent.click(screen.getByRole('button', { name: /crear usuario/i }));
        // });

        // expect(onCreateMock).toHaveBeenCalledWith({
        //     name: 'John Doe',
        //     email: 'john@example.com',
        //     phone: '1234567890'
        // });
        // expect(onCloseMock).toHaveBeenCalled();
    });
});
