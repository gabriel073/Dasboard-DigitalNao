import React from 'react';
import Modal from 'react-modal';

function DeleteUserModal({ isOpen, onClose, onDelete, user }) {
    const handleDelete = () => {
        if (user) {
            onDelete(user.id);
        }
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="flex flex-col dark:text-white items-center mt-40 ">
            <div className="flex flex-col border-2 border-gray-300 p-6 gap-4 dark:bg-[#16193A] rounded-xl w-1/2 h-1/2 shadow-xl">
                <h1 className="text-3xl">Delete Customer</h1>
                {user ? (
                    <div className='flex flex-col flex-wrapgap-4 m-auto'>
                        <p>Are you sure you want to remove "{user.name}" ?</p>
                        <div data-testid="delete-user-modal" className="flex  p-2 gap-2 text-center  m-auto rounded-xl">
                            <div className='flex flex-col gap-2 border-2 border-gray-200 bg-slate-400 dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf] rounded-xl p-3'>
                                <button onClick={handleDelete}>Delete</button>
                            </div>
                            <div className='flex flex-col gap-2  border-2 border-gray-200 bg-slate-400  dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf] rounded-xl p-3'>
                                <button onClick={onClose}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </Modal>
    );
}

export default DeleteUserModal;