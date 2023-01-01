import "./App.css";
import Home from "./components/home/home.jsx";
import LoginForm from "./components/login/Login";
import SignUpForm from "./components/sign-up/Sign-up";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Products from "./components/products/products";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/signUp" element={<SignUpForm />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
