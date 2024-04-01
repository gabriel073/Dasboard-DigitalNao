import { FaShoppingCart } from "react-icons/fa";
import { FaBriefcase, FaTruck } from "react-icons/fa6";
import Graphic from "./Graphic.jsx";
import CardActivity from "./CardActivity.jsx";
import CardViewDetails from "./CardViewDetails.jsx";



function Main() {
    return (
        <div className="w-full h-full pl-4 bg-[#F8F7FC]-z-55">
            <div className="flex h-[11rem]">
                <div className="flex justify-between gap-6 m-4">

                    <div className="stats bg-gradient-to-r from-blue-300 via-blue-400 to-blue-700 text-primary-content font-poppins w-80 h-28.5 opacity-80 p-2">
                        <div class="stat">
                            <p className="stat-title text-white font-poppins"><strong>Shipped orders</strong></p>
                            <div className="flex justify-end">
                                <p className="stat-value text-white font-poppins font-semibold text-6xl">89</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-wrap relative transform transition-all skew-x-1 skew-y-1 rotate-180 -z-50" >
                        <div className=" absolute rotate-45" >
                            <FaTruck className="w-24 h-24 absolute rotate-90 translate-x-24 -translate-y-36 -top-20 left-24 opacity-30 pl-5" />
                        </div>
                    </div>

                    <div className="stats bg-gradient-to-r from-rose-300 via-rose-400 to-rose-600 text-primary-content font-poppins  w-80 h-28.5 opacity-80 p-2">
                        <div class="stat">
                            <p className="stat-title text-white font-poppins"><strong>Pending order</strong></p>
                            <div className="flex justify-end text-6xl">
                                <p className="stat-value text-white font-poppins font-semibold text-6xl">09</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap relative transform transition-all skew-x-1 skew-y-1 rotate-180 -z-50" >
                        <div className="absolute rotate-45" >
                            <FaShoppingCart className="w-24 h-24 absolute rotate-90 translate-x-24 -translate-y-36 -top-20 left-20 opacity-30 pl-5" />
                        </div>
                    </div>

                    <div className="stats bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-primary-content font-poppins w-80 h-28.5 static opacity-80 p-2">
                        <div class="stat">
                            <p className="stat-title text-white font-poppins"><strong>New orders</strong></p>
                            <div className="flex justify-end">
                                <p className="stat-value text-white font-poppins font-semibold text-6xl">35</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap relative transform transition-all skew-x-1 skew-y-1 rotate-180 -z-50">
                        <div className="absolute rotate-45">
                            <FaBriefcase className=" absolute rotate-90 translate-x-24 -translate-y-36 -top-24 left-24  w-24 h-24 opacity-30 pl-5" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-2 flex-wrap gap-4 p-4  flex-col flex-row">
                {/* Componentes CardViewDetails y CardActivity */}
                <div className="w-full ">
                    <div className="w-full">
                        <CardViewDetails />
                    </div>
                    <div className="w-full">
                        <CardActivity />
                    </div>
                </div>

                {/* Componente Graphic */}
                <div className="w-full md:w-1/2">
                    <Graphic />
                </div>
            </div>
        </div>


    )
}

export default Main