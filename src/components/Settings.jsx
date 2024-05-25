import Aside from "./Aside"
import Header from "./Header"
import Users from "./Users";

function Settings() {
    return (
        <div className="flex max-h-194">
            <Aside />
            <div className="flex flex-wrap w-full h-fit ">
                <Header />
                <Users />
            </div>
        </div>
    )
}

export default Settings;