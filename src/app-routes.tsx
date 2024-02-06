import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import React from "react";
import {Register} from "./component/register/Register.tsx";
import {Payment} from "./component/payment/Payment.tsx";
import {BookDetails} from "./component/bookdetails/BookDetails.tsx";
import App from "./App.tsx";
import {Home} from "./component/home/Home.tsx";
import {Login} from "./component/login/Login.tsx";

const appRoutes: RouteObject[] = [
    {
        index: true,
        element: <Navigate to="home"/>
    },
    {
        path: 'home',
        element: <Home />
    },
    {
        path: 'book-details/:bookId',
        element: <BookDetails />
    },
    {
        path: 'register',
        element: <Register />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'payments',
        element: <Payment />
    }
];

const routes: RouteObject[] = [
    {
        index: true,
        element: <Navigate to="app"/>
    },
    {
        path: 'app',
        element: <App />,
        children: appRoutes
    },
    {
        path: '*',
        element: <Navigate to=""/>
    }
];

export const router = createBrowserRouter(routes);