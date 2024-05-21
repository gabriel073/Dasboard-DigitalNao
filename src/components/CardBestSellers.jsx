
import cocaCola from '../assets/cocaCola.png'
import mayonesa from '../assets/mayonesa.png'
import cremas from '../assets/cremas.png'

function CardBestSellers() {
    return (
        <div className='flex flex-col p-2  bg-white justify-between mb-6 rounded-xl border border-gray-200 shadow-xl dark:text-white dark:bg-[#16193A]'>
            <h3 className="text-black mb-4 font-bold text-[18px] dark:text-white">best sellers  |  today</h3>
            <div div className=' flex justify-between -mb-4 font-bold text-[14px]'>
                <p className='ml-4'>Preview</p>
                <p className='mr-4'>Product</p>
                <p className='mr-4 '>Price</p>
                <p className='mr-4'>sold</p>
                <p className='mr-4'>revenue</p>
            </div >
            <div className="divider dark:border-solid dark:border-t-2 mt-6 dark:border-[#C5C7CD]" ></div>
            <div className="flex flex-row items-center font-normal -mb-3 -mt-3">
                <div className="flex w-full justify-center ">
                    < img src={cocaCola} alt="coca-cola" className=' justify-center' />
                </div>
                <div className="flex w-full justify-center">
                    <p className="  text-sm">Coca Cola</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">$100</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">80</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">$5500</p>
                </div>
            </div>
            <div className="divider dark:border-solid dark:border-t-2 mt-6 dark:border-[#C5C7CD]"></div>

            <div className="flex flex-row font-normal items-center -mb-3 -mt-3">
                <div className="flex w-full justify-center">
                    < img src={mayonesa} alt='mayonesa' className=' justify-center' />

                </div>
                <div className="flex w-full justify-center">
                    <p className="  text-sm">Mayonesa</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">$100</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">80</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">$5500</p>
                </div>
            </div>
            <div className="divider dark:border-solid dark:border-t-2 mt-6 dark:border-[#C5C7CD]"></div>

            <div className="flex flex-row font-normal items-center -mb-3 -mt-3">
                <div className="flex w-full justify-center">
                    < img src={cremas} alt='cremas' className=' justify-center' />

                </div>
                <div className="flex w-full justify-center">
                    <p className="  text-sm">body creams</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">$100</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">560</p>
                </div>
                <div className="flex justify-center w-full">
                    <p className=" text-xs">$7500</p>
                </div>
            </div>
            <div className="divider dark:border-solid dark:border-t-2 mt-6 -mb-2  dark:border-[#C5C7CD]"></div>


        </div >
    )
}

export default CardBestSellers;