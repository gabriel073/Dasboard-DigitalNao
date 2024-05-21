import Dashboard from "./components/Dashboard.jsx";
import Home from "./components/Home.jsx";
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;
