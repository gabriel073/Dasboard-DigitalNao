import React from 'react'

function CardViewDetails() {
    return (

        <div className="card bg-white text-black-content border-solid border-1 rounded-xl border border-gray-200 shadow-xl mb-6 ">
            <div className="card  h-1/2 bg-white text-black-content border-solid border-1  rounded-xl border border-gray-200 shadow-xl ">
                <div className="card-body flex flex-row justify-between content-between">
                    <div className="flex flex-col justify-items-start content-between">
                        <div className="mb-2">
                            <h2 className="card-title text-lg">Inbox</h2>
                            <p className="text-xs">Group: Support</p>
                        </div>
                        <p className="text-sm">Waiting for order #12345</p>
                        <div className="divider w-50"></div>
                        <p className="text-sm">Customer support id #223344</p>
                    </div>
                    <div className="flex  flex-col justify-items-end items-end content-between">
                        <h2 className="card-title text-sm">View details</h2>
                        <div className="relative top-8 left-56" >
                            <p className="flex justify-self-end text-sm">4:39</p>
                            <div className="divider relative w-64 right-60"></div>
                            <p className="flex justify-self-end text-sm">11:07</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardViewDetails
