import React from 'react'
import Header from './Header'
import Aside from './Aside'

function Order() {
    return (
        <div className="flex max-h-194">
            <Aside />
            <div className="flex flex-wrap w-full h-fit ">
                <Header />
                <h1 className='m-auto flex text-7xl'> View Order </h1>

            </div>
        </div>
    )
}

export default Order