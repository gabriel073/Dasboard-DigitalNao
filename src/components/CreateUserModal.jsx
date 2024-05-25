import React, { useState } from 'react';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import * as yup from 'yup';

Modal.setAppElement('#root');

const validationSchema = yup.object({
    name: yup.string()
        .required('El nombre es requerido')
        .min(3, 'El nombre debe tener al menos 3 caracteres'),
    email: yup.string()
        .email('Debe ser un email válido')
        .required('El email es requerido'),
    phone: yup.string()
        .required('El teléfono es requerido')
        .matches(/^\d+$/, 'El teléfono debe contener solo números')
        .min(10, 'El teléfono debe tener al menos 10 caracteres')
        .max(15, 'El teléfono no debe tener más de 15 caracteres')
});

function CreateUserModal({ isOpen, onClose, onCreate }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({ name, email, phone });
        onClose();
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: ''
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            onCreate(values);
            onClose();
        },
    });

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="flex flex-col dark:text-white items-center mt-28 " >
            <div className="flex flex-col border-2 border-gray-300 p-6 dark:bg-[#16193A] rounded-xl w-1/2 h-1/2 shadow-xl">
                <h1 className="text-3xl mb-4">Crear Usuario</h1>
                <form onSubmit={formik.handleSubmit} className='flex flex-col flex-wrap'>
                    <div className=''>
                        <label htmlFor="name">Nombre:</label>
                        < input
                            className='mt-2 mb-2 w-full p-2 border border-gray-200 dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf] rounded-xl '
                            type="text"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-red-500  mb-4">{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            className='w-full mb-2 p-2 border border-gray-200 dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf] rounded-xl mt-2'
                            type="email"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 mb-4">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            className='w-full p-2 mb-2 border border-gray-200 dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf] rounded-xl'
                            type="text"
                            id="phone"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="text-red-500 ">{formik.errors.phone}</div>
                        ) : null}

                    </div>
                    <div className="flex flex-col m-auto border border-gray-200 bg-slate-400 p-2 gap-2 text-center  dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf]  rounded-xl  w-36 ">
                        <button type="submit">Crear Usuario</button>
                    </div>
                </form >
            </div >
        </Modal >
    );
}
export default CreateUserModal;