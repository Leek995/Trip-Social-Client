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
import Posts from "./pages/Posts.jsx";
import EditPost from "./pages/EditPost";
import CreatePost from "./pages/CreatePost.jsx";



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
            {
                path: "/posts",
                element: <Posts/>
            },
            {
                path: "/create/post",
                element: <CreatePost/>
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
    },

    {
        path: "/edit/post",
        element: <EditPost/>
    },


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <h1>TripSocial</h1>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
