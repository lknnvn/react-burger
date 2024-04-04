import React, {ReactElement} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useSelector} from "react-redux";
import {InitialState} from "../services/initialState";

interface ProtectedRouteProps {
    element: ReactElement;
    //  path: string;
}

const ProtectedRouteElement: React.FC<ProtectedRouteProps> = ({element}) => {
    const location = useLocation();
    const path = location.pathname;

    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const isForgotPasswordVisited = useSelector((state: InitialState) => state.auth.isForgotPasswordVisited);

    if (!isAuthenticated && (path.startsWith('/profile'))) {
        return <Navigate to="/login" replace/>;
    }

    if (isAuthenticated && (path === '/login' || path === '/register' || path === '/forgot-password' || path === '/reset-password')) {
        return <Navigate to="/" replace/>;
    }

    if (!isAuthenticated && !isForgotPasswordVisited && path === '/reset-password') {
        return <Navigate to="/forgot-password" replace/>;
    }

    return element;
}

export default ProtectedRouteElement