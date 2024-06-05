import Aside from "./Aside";
import Header from "./Header";
import MainHome from "./MainHome";

function Home() {
    return (
        <div className="flex max-h-194">
            <Aside />
            <div className="flex flex-wrap w-full ">
                <Header />
                <MainHome />
            </div>
        </div>
    )
}
export default Home;