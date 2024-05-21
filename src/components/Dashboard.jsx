import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";


function Dashboard() {
    return (
        <div className="flex max-h-194">
            <Aside />
            <div className="flex flex-wrap w-full ">
                <Header />
                <Main />
            </div>
        </div>
    )
}
export default Dashboard;



