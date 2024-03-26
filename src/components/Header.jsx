
function Header() {
    return (
        <>
            <div className="w-full bg-gray-100 border-solid border-2 border-sky-500 h-20 flex justify-between items-center" >
                <div className="flex  " >
                    <div className="flex flex-col ">
                        <h2 className="font-poppins text-base text-black">Total Revenue</h2>
                        <p className="font-poppins  text-black text-xxl"><strong>$ 45,365.00</strong></p>
                    </div>

                    <div className="flex items-end ml-3 mb-2 ">
                        <svg height="13" fill="red" className="rotate-180 mb-1 " viewBox="0 0 11 11" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m5.5174 1.2315c-.2011-.0062-.3898.0965-.4934.2685l-4 6.6598c-.2227.3695.0439.8401.476.8402h8c.4321-.0001.6987-.4707.476-.8402l-4-6.6598c-.0973-.1614-.27-.2625-.4586-.2685z" /></svg> <p className="mr-3 text-red-900 text-xs">$1,294</p>

                        <svg height="13" fill="green" viewBox="0 0 11 11" width="13" className=" mb-1 " xmlns="http://www.w3.org/2000/svg"><path d="m5.5174 1.2315c-.2011-.0062-.3898.0965-.4934.2685l-4 6.6598c-.2227.3695.0439.8401.476.8402h8c.4321-.0001.6987-.4707.476-.8402l-4-6.6598c-.0973-.1614-.27-.2625-.4586-.2685z" /></svg><p className=" text-green-900 text-xs">$1,294</p>
                    </div>
                </div>


                <div className="bg-white text-slate-300 max-w-96 flex items-center ">
                    <label className="input input-bordered rounded-md border-0 flex items-center gap-2 h-7 max-w-96">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70 bg-white"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="grow text-slate-300" placeholder="Search" />
                    </label>
                </div>


                <div className="flex items-center ">

                    <button className="btn btn-ghost btn-circle pl-8">
                        <div className="indicator mr-8">
                            <svg viewBox="0 0 512 512" className="h-5 w-5" fill="blue" xmlns="http://www.w3.org/2000/svg"><path d="m448 0h-384c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7l124.9-93.7h144c35.3 0 64-28.7 64-64v-288c0-35.3-28.7-64-64-64z" /></svg>
                            <span className="indicator-item badge badge-xs badge-error " ></span>
                        </div>
                    </button>
                    <button className="btn btn-ghost btn-circle mb-1  pl-4">
                        <div className="indicator mr-7">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="blue" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-error indicator-item mt-1 mr-1"></span>
                        </div>
                    </button>


                    <div className="avatar ">
                        <div className="w-14 rounded-full mr-4">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}
export default Header