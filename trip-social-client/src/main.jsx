import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root, {loader as rootLoader} from "./pages/Root.jsx";
import ErrorPage from "./pages/error-page.jsx";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Additional from "./pages/Additional";
import ProfileImageUpload from "./pages/ProfileImageUpload";



const router = createBrowserRouter([
    {
        path:"/",
        element: <Root/>,
        errorElement:<ErrorPage/>,
        loader: rootLoader,
        children: [
            {
                path: "/settings",
                element: <Settings/>
            },

        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/register/additional",
        element: <Additional/>
    },
    {
        path: "/register/upload",
        element: <ProfileImageUpload/>
    }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
