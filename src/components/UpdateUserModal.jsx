import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/userSlice.js';

const validationSchema = yup.object({
    name: yup.string()
        .required('The name is required')
        .min(3, 'The name must be at least 3 characters'),
    email: yup.string()
        .email('It must be a valid email')
        .required('The email is required'),
    phone: yup.string()
        .required('The phone is required')
        .min(10, 'The phone number must be at least 10 characters')
        .max(15, 'The phone number must not be more than 15 characters')
});


function UpdateUserModal({ isOpen, onClose, user }) {
    const dispatch = useDispatch();




    const formik = useFormik({
        initialValues: {
            name: user?.name || '',
            email: user?.email || '',
            phone: user?.phone || ''
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: (values) => {

            dispatch(updateUser({ id: user.id, ...values }));
            onClose();
        },
    });



    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="flex flex-col dark:text-white items-center mt-24 ">
            <div className="flex flex-col border-2 border-gray-300 p-6 gap-4 dark:bg-[#16193A] rounded-xl w-1/2 h-1/2 shadow-xl">
                <h1 className="text-3xl">Actualizar Usuario</h1>
                <form onSubmit={formik.handleSubmit} data-testid="update-user-modal" className='flex flex-col flex-wrapgap-4'>
                    <div className='mb-4'>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
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
                            id="email"
                            name="email"
                            className='w-full p-2 border border-gray-200 dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf] rounded-xl'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 mb-2">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="text"
                            name="phone"
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
                        <button type="submit" >Update</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default UpdateUserModal;