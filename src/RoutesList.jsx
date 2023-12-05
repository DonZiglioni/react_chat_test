import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Room from './components/Room/Room';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import PrivateRoutes from './PrivateRoutes';
import { AuthProvider } from './auth/authContext';

const RoutesList = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

                <Route element={<PrivateRoutes />} >
                    <Route path='/room' element={<Room />} />
                </Route>

            </Routes>
        </AuthProvider>
    )
}

export default RoutesList