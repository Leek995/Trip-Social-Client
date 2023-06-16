import './App.css'
import './pages/Home.jsx'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login.jsx";

function App() {

  return(
      <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/settings" element={<Login />} />
          </Routes>
      </>
  )

}

export default App
