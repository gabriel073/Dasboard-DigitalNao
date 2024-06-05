import { FaPowerOff } from "react-icons/fa6";
import { FaHome, FaShoppingCart, FaBriefcase, FaTruck } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Aside() {
    const savedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(savedTheme || "light");
    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }

    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    }

    return (
        <div className='w-1/5 h-content pb-30 font-poppins flex pt-2 justify-center flex-wrap dark:text-white dark:bg-[#16193A] dark:hover:bg-[#16193A] '>
            <ul className="flex flex-col justify-between text-sm mb-6 gap-4">
                <li className="flex justify-center pb-4 ">
                    <button onClick={handleChangeTheme} data-testid="toggle-theme" className="flex items-center hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg w-20 h-20 dark:hover:bg-opacity-20">
                        <FaPowerOff className='w-20 h-20' />
                    </button>
                </li>

                <li className="text-slate-400 mb-4">
                    <Link to={"/"}
                        className="flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg dark:hover:bg-[#FFCF00] dark:hover:text-[#2A4178]">
                        <BiSolidDashboard />
                        Dashboard
                    </Link>
                </li>

                <li className="text-slate-400 mb-4">
                    <Link to={"/home"}
                        className="flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg  dark:hover:bg-[#FFCF00] dark:hover:text-[#2A4178]">
                        <FaHome />
                        Home
                    </Link>
                </li>

                <li className="text-slate-400 mb-4">
                    <Link to={"/order"}
                        className="flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg  dark:hover:bg-[#FFCF00] dark:hover:text-[#2A4178]">
                        <FaShoppingCart />
                        Order
                    </Link>
                </li>

                <li className="text-slate-400 mb-4">
                    <Link to={"/products"}
                        className="flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg dark:hover:bg-[#FFCF00] dark:hover:text-[#2A4178]">
                        <FaBriefcase />
                        Products
                    </Link>
                </li>

                <li className="text-slate-400 mb-4">
                    <Link to={"/shipping"}
                        className="flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg  dark:hover:bg-[#FFCF00] dark:hover:text-[#2A4178]">
                        <FaTruck />
                        Shipping
                    </Link>
                </li>

                <li className="text-slate-400 mb-4">
                    <Link to={"/payments"}
                        className="flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg  dark:hover:bg-[#FFCF00] dark:hover:text-[#2A4178]">
                        <MdOutlinePayment />
                        Payments
                    </Link>
                </li>

                <li className="text-slate-400">
                    <Link to={"/settings"}
                        className="flex items-center gap-4 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg  dark:hover:bg-[#FFCF00] dark:hover:text-[#2A4178]">
                        <IoMdSettings />
                        Settings
                    </Link>
                </li>

            </ul>

            <div className="flex flex-wrap justify-center h-[20rem]">
                <div className="">

                    <h2 className=" ml-10 mb-4 text-sm"><strong>Custommer Support</strong></h2>
                    <p className="px-7  text-xs text-slate-400">Ask you query , place
                        requests or important
                        issues. Our support
                        team will contact 24/7
                        to you. </p>

                </div>
                <button className="btn flex text-xs text-blue-600 mr-8 -mb-[20px] w-35 h-10 border-solid border-0 rounded-lg items-center border-sky-500 bg-sky-200 px-2 py-2 dark:text-black">
                    <svg className="text-sm w-8 fill-blue-600 dark:fill-black" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="m4.0224969 6.587203h.205707v-2.41612c.00049-.006.0019-.0118.0019-.018v-.35676c0-.63602.196314-1.15155.583531-1.53238.800924-.78804 2.169006-.77731 2.192104-.77408.01626-.001 1.372905-.0207 2.177417.76673.389864.38157.587629.89949.587629 1.53973v.37723c0 .004.000961.007.000961.0107v2.40287h.205707c.5062561 0 .9165901-.41033.9165901-.91647v-.88085c0-.4072-.265883-.75192-.633492-.87122v-.12217c0-.77685-.247353-1.41262-.7347071-1.88975-.95014-.92992998-2.46785-.90585-2.520929-.90657-.06378-.00060998-1.582945-.0193-2.532634.91237-.485668.47665-.732061 1.11049-.732061 1.88385v.12169c-.368079.11927-.634217.46425-.634217.87168v.88085c.00002.50628.410452.91661.916473.91661zm8.1621591 5.4486c-.112902-2.14469-2.040456-3.03191-2.040456-3.03191-.4605311-.21533-1.2954941-.63686-1.8429271-.91551.701375-.76734.908532-2.01842.940787-2.19644.146373-.80549.07271-1.80247.07271-1.80247-.133843-1.93873-2.091241-1.96918-2.296222-1.96715-.01131 0-.01867.00012-.01867.00012s-.0063-.00012-.01553 0c-.185844-.002-2.16479.0172-2.299359 1.96703 0 0-.07367.99686.07271 1.80247.0095.0519.03431.19643.08137.39191.368687.484.937885.72135 1.405043.83751.05874-.0571.138784-.0926.227491-.0926h.851472c.180197 0 .32608.146.32608.3262 0 .18031-.145883.32643-.32608.32643h-.851472c-.134452 0-.249393-.0811-.299589-.19681-.348452-.0847-.751689-.23231-1.111592-.48615.143589.37276.348217.77262.638296 1.09004-.547433.27865-1.382043.70004-1.842926.91539 0 0-1.927299.88722-2.040457 3.03191 0 0-.03347.35665.642394.49169 0 0 2.070535.47255 4.542385.47255 2.472085 0 4.5426201-.47255 4.5426201-.47255.675747-.13504.641923-.49169.641923-.49169z" /></svg>
                    <strong> Connect Now</strong>

                </button>
                <p className="text-xs text-slate-400 w-[8rem]  flex flex-wrap"  >Terms & Services <br />Privacy Policy</p>
            </div >
        </div >
    )
}

export default Aside