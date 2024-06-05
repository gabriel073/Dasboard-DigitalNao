import Aside from './Aside'
import Header from './Header'

function Shipping() {
    return (
        <div className="flex max-h-194">
            <Aside />
            <div className="flex flex-wrap w-full h-fit ">
                <Header />
                <h1 className='m-auto flex text-7xl'> View Shipping </h1>
            </div>
        </div>
    )
}
export default Shipping;