import React from 'react'
import Details from '../components/Details';
import Home from '../Pages/Home';
import SearchPage from '../components/SearchPage/SearchPage';
import LoginPage from '../components/LoginPage/LoginPage';

const private_routes = [
    {
        path: '/',
        element: <Home/>
    }, 
    {
        path: '/details/:id',
        element: <Details/>
    }, 
    {
        path: '/search',
        element: <SearchPage/>
    }
]

export const public_routes = [
    {
        path: '/login',
        element: <LoginPage/>
    }
]

export default private_routes;
