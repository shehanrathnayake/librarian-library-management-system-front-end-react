import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import React from "react";
import App from "./App.tsx";

const routes: RouteObject[] = [
    {
        index: true,
        element: <Navigate to="home" />
    },
    {
        path: 'home',
        element: <App/>
    }
];

export const router = createBrowserRouter(routes);