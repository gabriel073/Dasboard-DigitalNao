import React from 'react'
import { FaCircle, FaCheckCircle, FaRegCircle } from "react-icons/fa";

function CardActivity() {
    return (
        <div className='flex flex-col p-4 bg-white rounded-xl border border-gray-200 justify-between shadow-xl px-4 dark:text-white dark:bg-[#16193A]'>
            <div div className=' flex justify-between'>
                <h2 className='ml-4 text-lg mb-2'> <strong>Recent activity</strong></h2>
                <p className='mr-4 text-sm'>view all</p>
            </div >

            <div className="flex flex-row items-center">
                < FaCheckCircle className='text-4xl text-blue-600' />
                <div className="flex flex-col w-full ">
                    <p className="justify-items-start  px-2 text-sm"> Confirm order update</p>
                </div>
                <div className="flex justify-end w-full">
                    <button className="btn btn-warning btn-sm text-xs">URGENT</button>
                </div>
            </div>
            <div className="divider dark:border-solid dark:border-b-2 dark:border-[#C5C7CD]"></div>

            <div className="flex flex-row items-center">
                <FaCircle className='text-4xl text-red-700' />
                <div className="flex flex-col w-full ">
                    <p className="justify-items-start px-2 text-sm"> Finish shipping update</p>
                </div>
                <div className="flex justify-end w-full">
                    <button className="btn btn-warning btn-sm text-xs">URGENT</button>
                </div>
            </div>
            <div className="divider dark:border-solid dark:border-b-2 dark:border-[#C5C7CD]"></div>

            <div className="flex flex-row items-center">
                <FaRegCircle className='text-4xl text-slate-400' />
                <div className="flex flex-col w-full ">
                    <p className="justify-items-start px-2 text-sm"> Create new order</p>
                </div>
                <div className="flex justify-end w-full">
                    <button className="btn btn-accent btn-sm text-xs">NEW</button>
                </div>
            </div>
            <div className="divider dark:border-solid dark:border-b-2 dark:border-[#C5C7CD]"></div>

            <div className="flex flex-row items-center">
                < FaCheckCircle className='text-4xl text-blue-600' />
                <div className="flex flex-col w-full ">
                    <p className="justify-items-start px-2 text-sm">Update payment report</p>
                </div>
                <div className="flex justify-end w-full">
                    <button className="btn btn-warning btn-sm text-xs  dark:bg-[#F2F2F2] dark:text-[#9FA2B4]" disabled="disabled ">DEFAULT</button>
                </div>
            </div>

        </div >
    )
}
export default CardActivity;