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
import {fetchIngredients} from "../../services/actions/ingredientsActions";
import FeedPage from "../../pages/feed";
import OrdersPage from "../../pages/profile/orders";
import OrderDetailsPage from "../../pages/order-details";
import {useTDispatch} from "../../services/types";


function App() {
    const dispatch = useTDispatch()

    React.useEffect(() => {
        dispatch(fetchIngredients())
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
                <Route path="/feed" element={<FeedPage/>}/>
                <Route path="/feed/:number" element={<OrderDetailsPage/>}/>
                <Route path="/profile/orders" element={<ProtectedRouteElement element={<OrdersPage />} />}/>
                <Route path="/profile/orders/:number" element={<ProtectedRouteElement element={<OrderDetailsPage />} />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App