import Aside from "./components/Aside"
import Header from "./components/Header"
import Main from "./components/Main"



function App() {


  return (
    <>
      <div className="flex max-h-194">
        <Aside />
        <div className="flex flex-wrap w-full ">
          <Header />
          <Main />
        </div>
      </div>

    </>
  )
}

export default App
