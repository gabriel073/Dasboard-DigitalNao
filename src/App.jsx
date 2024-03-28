import Aside from "./components/Aside.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";



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
