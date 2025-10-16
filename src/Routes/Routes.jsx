import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Registration/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <div><h1>Error Pages</h1></div>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: LogIn
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    },
]);
