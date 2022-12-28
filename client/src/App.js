import "./App.css";
import Home from "./components/home/home.jsx";
import Login from "./components/login/Login";
import SignUp from "./components/sign-up/Sign-up";
import { Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
