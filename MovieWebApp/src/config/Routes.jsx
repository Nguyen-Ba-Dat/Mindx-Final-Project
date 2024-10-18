import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
import SignIn from '../components/SignIn/SignIn';  
import SignUp from '../components/SignIn/SignUp';  

/**
 * Lớp Cấu hình các đường dẫn của component
 * @returns 
 */
export default function AppRoutes() { 
    return (
        <RouterRoutes> 
            <Route
                path='/:category/search/:keyword'
                element={<Catalog />} 
            />
            <Route
                path='/:category/:id'
                element={<Detail />} 
            />
            <Route
                path='/:category'
                element={<Catalog />} 
            />
            <Route
                path='/'
                element={<Home />} 
            />
                        <Route
                path='/signin'
                element={<SignIn />} 
            />
            <Route
                path='/signup'
                element={<SignUp />} 
            />
        </RouterRoutes>
    )
}
