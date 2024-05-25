import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Para evitar errores de accesibilidad

function UserFormModal({ isOpen, onClose, onCreate }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({ name, email });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit">Crear</button>
            </form>
        </Modal>
    );
}

export default UserFormModal;