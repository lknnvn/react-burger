// src/components/app/app.tsx
import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../../pages/home";
import RegisterPage from "../../pages/register";
import AppHeader from "../app-header";
import Login from "../../pages/login";
import ForgotPasswordPage from "../../pages/forgot-password";
import ProfilePage from "../../pages/profile";
import ResetPasswordPage from "../../pages/reset-password";
import ProtectedRouteElement from "../protected-route-element";
import IngredientDetailsPage from "../../pages/ingredient-details";
import {useDispatch} from "react-redux";
import {fetchIngredients} from "../../services/actions/ingredientsActions";
import {Action} from "redux";

function App() {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchIngredients() as unknown as Action<string>)
    }, [dispatch])

    return (
        <BrowserRouter>
            <AppHeader/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<ProtectedRouteElement element={<RegisterPage />} />}/>
                <Route path="/login" element={<ProtectedRouteElement element={<Login />} />}/>
                <Route path="/forgot-password" element={<ProtectedRouteElement element={<ForgotPasswordPage />} />}/>
                <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />} />}/>
                <Route path="/reset-password" element={<ProtectedRouteElement element={<ResetPasswordPage />} />}/>
                <Route path="/ingredients/:id" element={<IngredientDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App