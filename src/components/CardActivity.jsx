import React from 'react'
import { FaCircle, FaCheckCircle, FaRegCircle } from "react-icons/fa";

function CardActivity() {
    return (
        <div className='flex flex-col h-full pt-4  bg-white rounded-xl border border-gray-200 flex justify-between shadow-xl px-4 '>
            <div div className=' flex justify-between mb-4' >
                <h2 className='ml-4'> <strong>Recent activity</strong></h2>
                <p className='mr-4'>view all</p>
            </div >

            <div className="flex flex-row p-4 -mb-6 items-center">
                < FaCheckCircle className='text-5xl text-blue-600' />
                <div className="flex flex-col w-full ">
                    <p className="justify-items-start  px-4 "> Confirm order update</p>
                </div>
                <div className="flex justify-end w-full">
                    <button className="btn btn-warning btn-sm  ">URGENT</button>
                </div>
            </div>
            <div className="divider"></div>

            <div className="flex flex-row p-4 -mb-6 -mt-5 items-center">
                <FaCircle className='text-5xl text-red-700' />
                <div className="flex flex-col w-full ">
                    <p className="justify-items-start  px-4 "> Finish shipping update</p>
                </div>
                <div className="flex justify-end w-full">
                    <button className="btn btn-warning btn-sm  ">URGENT</button>
                </div>
            </div>
            <div className="divider"></div>

            <div className="flex flex-row p-4 -mb-6 -mt-5 items-center">
                <FaRegCircle className='text-5xl text-slate-400' />
                <div className="flex flex-col w-full ">
                    <p className="justify-items-start  px-4 "> Create new order</p>
                </div>
                <div className="flex justify-end w-full">
                    <button className="btn btn-accent btn-sm">NEW</button>
                </div>
            </div>
            <div className="divider"></div>

            <div className="flex flex-row p-4 -mt-5 items-center">
                < FaCheckCircle className='text-5xl text-blue-600' />
                <div className="flex flex-col w-full ">
                    <p className="justify-items-start  px-4 ">Update payment report</p>
                </div>
                <div className="flex justify-end w-full">
                    <button className="btn btn-warning btn-sm" disabled="disabled">DEFAULT</button>
                </div>
            </div>

        </div >

    )
}

export default CardActivity