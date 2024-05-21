
function RecentSales() {
    return (
        <div className='flex flex-col p-4 bg-whitejustify-between  text-black  rounded-xl border border-gray-200 shadow-xl  dark:text-white dark:bg-[#16193A]'>
            <div div className='flex justify-between mb-4'>
                <h2 className='ml-4 text-lg font-bold text-[18px]'> <strong>Recent Sales</strong></h2>

            </div >

            <div div className=' flex justify-between -mb-4 font-bold '>
                <p className='ml-4 text-lg text-black dark:text-white '>#</p>
                <p className='mr-4 text-sm text-black dark:text-white'>Client</p>
                <p className='mr-4 text-sm text-black dark:text-white'>Product</p>
                <p className='mr-4 text-sm text-black dark:text-white'>Price</p>
                <p className='mr-4 text-sm text-black dark:text-white'>Status</p>
            </div >
            <div className="divider dark:border-solid dark:border-t-2 mt-6 dark:border-[#C5C7CD]"></div>


            <div className="flex flex-row  font-normal items-center" >
                <div className="flex w-full justify-start">
                    <p className="text-sm ">#2324</p>

                </div>
                <div className="flex w-full flex-wrap">
                    <p className="text-sm w-32 flex-wrap ">Esteban Gonzalez</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">Coca-cola</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">$580</p>
                </div>
                <div className="flex justify-center w-full">
                    <button className="btn  bg-[#46FE05] btn-sm text-xs">Aprobado</button>
                </div>
            </div>
            <div className="divider dark:border-solid dark:border-t-2 dark:border-[#C5C7CD]"></div>

            <div className="flex flex-row font-normal items-center" >
                <div className="flex w-full justify-start">
                    <p className="  text-sm">#0924</p>

                </div>
                <div className="flex w-full flex-wrap">
                    <p className="text-sm w-32 flex-wrap">Jose Lopez</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">Mayonesa</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">$330</p>
                </div>
                <div className="flex justify-center w-full">
                    <button className="btn  bg-[#FF0303] btn-sm text-xs">Rechazado</button>
                </div>
            </div>
            <div className="divider dark:border-solid dark:border-t-2 dark:border-[#C5C7CD]"></div>

            <div className="flex flex-row font-normal items-center" >
                <div className="flex w-full justify-start">
                    <p className="  text-sm">#2694</p>

                </div>
                <div className="flex w-full flex-wrap">
                    <p className="text-sm w-32 flex-wrap">Alejandro Benitez</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">Cremas</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">$580</p>
                </div>
                <div className="flex justify-center w-full">
                    <button className="btn bg-[#D5F606] btn-sm text-xs">Pendiente</button>
                </div>
            </div>
            <div className="divider dark:border-solid dark:border-t-2 dark:border-[#C5C7CD] -mb-4 "></div>


        </div >
    )
}

export default RecentSales