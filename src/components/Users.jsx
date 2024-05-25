

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser } from '../redux/userSlice';
import CreateUserModal from './CreateUserModal';
import UpdateUserModal from './UpdateUserModal';
import DeleteUserModal from './DeleteUserModal';
import Pagination from './Pagination';

function Users() {
    const users = useSelector(state => state.user.users);
    const totalCount = useSelector(state => state.user.totalCount);
    const loading = useSelector(state => state.user.loading);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        dispatch(fetchUsers({ page: currentPage, limit: itemsPerPage }));
    }, [dispatch, currentPage, itemsPerPage]);

    const handleCreateUser = () => {
        setShowCreateModal(true);
    };

    const handleUpdateUser = (user) => {
        setSelectedUser(user);
        setShowUpdateModal(true);
    };

    const handleDeleteUser = (user) => {
        setSelectedUser(user);
        setShowDeleteModal(true);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(totalCount / itemsPerPage);
    // console.log('Total Pages:', totalPages);
    return (
        <>
            <div className="w-full h-full  bg-gray-200 flex-col rounded-xl border border-gray-200 shadow-xl  dark:text-white dark:bg-[#030C1B] flex-wrap justify-items-center ">
                <div className="w-full flex gap-2 p-2 justify-between items-center ">
                    <h1 className="ml-5">Lista de Usuarios</h1>
                    <div className="flex-col border border-gray-200 mr-5 p-2 gap-2 dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf] rounded-xl h-auto w-32 flex justify-center">
                        <button onClick={handleCreateUser}>Crear Usuario</button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-4 border-b pt-20 border-gray-200 items-center justify-center h-full w-full dark:bg-[#030C1B] flex-wrap">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="dark:text-white border-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center h-full dark:bg-[#030C1B]">
                        {Array.isArray(users) && users.map(user => (
                            <div key={user.id} className="h-[29vh] w-full">
                                <div className="flex flex-col border border-gray-200 p-4 gap-4 dark:bg-[#16193A] rounded-xl w-50">
                                    <div>
                                        <strong>Nombre:</strong> {user.name}
                                    </div>
                                    <div>
                                        <strong>Email:</strong> {user.email}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col border dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf] p-2 gap-2 bg-slate-400 rounded-xl w-20">
                                            <button onClick={() => handleUpdateUser(user)}>Editar</button>
                                        </div>
                                        <div className="flex flex-col border dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf] p-2 gap-2 bg-slate-400 rounded-xl w-20">
                                            <button onClick={() => handleDeleteUser(user)}>Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="pb-12 pt-2  dark:text-white">
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}

                    />

                </div>
            </div>

            <CreateUserModal
                isOpen={showCreateModal}
                onClose={() => setShowCreateModal(false)}
                onCreate={(newUser) => {
                    dispatch(addUser(newUser));
                    setShowCreateModal(false);
                }}
            />
            <UpdateUserModal
                isOpen={showUpdateModal}
                onClose={() => setShowUpdateModal(false)}
                onUpdate={(updatedUser) => {
                    dispatch(updateUser(updatedUser));
                    setShowUpdateModal(false);
                }}
                user={selectedUser}
            />
            <DeleteUserModal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onDelete={() => {
                    dispatch(deleteUser(selectedUser.id));
                    setShowDeleteModal(false);
                }}
                user={selectedUser}
            />
        </>
    );
}

export default Users;