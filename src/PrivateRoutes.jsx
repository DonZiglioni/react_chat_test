import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Room from './components/Room/Room';
import Login from './components/Login/Login';
import { useAuth } from './auth/authContext';

const PrivateRoutes = () => {
    const { user } = useAuth();
    return (
        <>
            {user ? <Outlet /> : <Navigate to='/login' />}
        </>
    )
}

export default PrivateRoutes