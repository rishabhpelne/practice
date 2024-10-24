import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./component/Signup";
import Login from "./component/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./component/Home";
import View from "./component/View";
import Form from "./component/Form";

function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/home" element={<Home />} />
    <Route path="/view" element={<View />} />
    <Route path="/form" element={<Form />} />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
