import CardBestSellers from './CardBestSellers';
import RecentSales from './RecentSales';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import MapCustomers from './MapCustomers';

function MainHome() {
    return (
        <div className="w-full h-content pl-4 bg-[#F8F7FC]-z-55 dark:bg-[#030C1B]">
            <div className="flex h-[11rem] w-full">
                <div className="flex w-full justify-between gap-6 m-4">

                    <div className="stats w-1/2 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-700 text-primary-content font-poppins  h-28.5 opacity-80 p-2">
                        <div class="stat">
                            <p className="stat-title text-white font-poppins ml-16"><strong>Customers</strong></p>
                            <div className="flex justify-end">
                                <p className="stat-value text-white font-poppins font-semibold text-6xl">1989</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap relative transform transition-all skew-x-1 skew-y-1 rotate-180 -z-50 dark:z-50" >
                        <div className=" absolute rotate-45" >
                            <FaUsers className="w-24 h-24 absolute rotate-90 translate-x-[320px] -translate-y-[105px] -top-64 opacity-30 pl-5" />
                        </div>
                    </div>

                    <div className="stats bg-gradient-to-r from-rose-300 via-rose-400 to-rose-600 text-primary-content font-poppins w-1/2 h-28.5 opacity-80 p-2">
                        <div class="stat">
                            <p className="stat-title text-white font-poppins ml-16"><strong>Total Sales</strong></p>
                            <div className="flex justify-end text-6xl">
                                <p className="stat-value text-white font-poppins font-semibold text-6xl">229</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap relative transform transition-all skew-x-1 skew-y-1 rotate-180 -z-50 dark:z-50" >
                        <div className="absolute rotate-45" >
                            <FaMoneyBillTrendUp className="w-24 h-24 absolute rotate-90 translate-x-[330px] -translate-y-[105px] -top-64 opacity-30 pl-5" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 flex-wrap gap-4 p-4 flex-row">
                <div className="w-full ">
                    <div className="w-full">
                        <CardBestSellers />
                    </div>
                    <div className="w-full">
                        <RecentSales />
                    </div>
                </div>

                <div className="w-full md:w-1/2 h-content font-bold flex flex-col justify-center" >
                    <div className=' w-[30rem] relative left-5 mt-8 border-grey-200 '>
                        <h2 className=' text-4xl flex flex-col items-center T
                        text-center w-[30rem] flex-wrap text-[34px]  mb-6 dark:text-white'>countries that choose us</h2>
                    </div>
                    <MapCustomers />
                </div>
            </div>
        </div>


    )

}

export default MainHome