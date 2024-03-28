import React from 'react'

function CardViewDetails() {
    return (
        <div className="flex w-full">
            <div className="card  h-1/2 bg-white text-black-content border-solid border-1  rounded-xl border border-gray-200 shadow-xl ">
                <div className="card-body flex flex-row justify-between content-between">
                    <div className="flex flex-col justify-items-start content-between">
                        <div className="mb-5">
                            <h2 className="card-title">Inbox</h2>
                            <p>Group: Support</p>
                        </div>
                        <p>Waiting for order #12345</p>
                        <div className="divider w-50"></div>
                        <p>Customer support id #223344</p>
                    </div>
                    <div className="flex  flex-col justify-items-end items-end content-between">
                        <h2 className="card-title">View details</h2>
                        <div className="relative top-11 left-56" >
                            <p className="flex justify-self-end">4:39</p>
                            <div className="divider relative w-64 right-60"></div>
                            <p className="flex justify-self-end">11:07</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardViewDetails