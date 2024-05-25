import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import * as yup from 'yup';

Modal.setAppElement('#root'); // Para evitar errores de accesibilidad
const validationSchema = yup.object({
    name: yup.string()
        .required('El nombre es requerido')
        .min(3, 'El nombre debe tener al menos 3 caracteres'),
    email: yup.string()
        .email('Debe ser un email válido')
        .required('El email es requerido'),
    phone: yup.string()
        .required('El teléfono es requerido')
        .min(10, 'El teléfono debe tener al menos 10 caracteres')
        .max(15, 'El teléfono no debe tener más de 15 caracteres')
});

function UpdateUserModal({ isOpen, onClose, onUpdate, user }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({ name, email, phone });
        onClose();
    };

    const formik = useFormik({
        initialValues: {
            name: user?.name || '',
            email: user?.email || '',
            phone: user?.phone || ''
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            onUpdate(values);
            onClose();
        },
    });

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setPhone(user.phone);
        }
    }, [user]);



    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="flex flex-col dark:text-white items-center mt-24 ">
            <div className="flex flex-col border-2 border-gray-300 p-6 gap-4 dark:bg-[#16193A] rounded-xl w-1/2 h-1/2 shadow-xl">
                <h1 className="text-3xl">Actualizar Usuario</h1>
                <form onSubmit={formik.handleSubmit} className='flex flex-col flex-wrapgap-4'>
                    <div className='mb-4'>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            className='w-full p-2 border border-gray-200 dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf] rounded-xl'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-red-500 mb-2">{formik.errors.name}</div>
                        ) : null}

                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className='w-full p-2 border border-gray-200 dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf] rounded-xl'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-red-500 mb-2">{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            id="phone"
                            className='w-full p-2 border border-gray-200 dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf] rounded-xl'
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="text-red-500 mb-2">{formik.errors.phone}</div>
                        ) : null}
                    </div>
                    <div className="flex flex-col m-auto border border-gray-200  p-2 gap-2 text-center bg-slate-400  dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf]  rounded-xl  w-36  mt-4">
                        <button type="submit">Actualizar</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default UpdateUserModal;