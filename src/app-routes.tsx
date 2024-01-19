import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import {Home} from "./component/home/Home.tsx";

const routes: RouteObject[] = [
    {
        index: true,
        element: <Navigate to="home" />
    },
    {
        path: 'home',
        element: <Home/>
    }
];

export const router = createBrowserRouter(routes);