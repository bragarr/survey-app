import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { SignUp } from "../pages/SignUp/SignUp"

export function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
        </Routes>
    )
}