import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
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

function logOutUser(){
    localStorage.clear();
}
const current_user = JSON.parse(localStorage.getItem("user"));
console.log(current_user)

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
            }
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
      {
          current_user ? (
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container-fluid">
                      <a className="navbar-brand" href="/"><h1>TripSocial</h1></a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                              data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                              aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <a className="nav-link active" aria-current="page" href="/posts">Posts</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link active" aria-current="page" href="/create/post">Create Post</a>
                              </li>
                              <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                     aria-expanded="false">
                                      Settings
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li><a className="dropdown-item" href="/settings">Edit Profile</a></li>
                                      <li>
                                          <a onClick={logOutUser} className="dropdown-item" href="/login">Logout</a>
                                      </li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
          ):(
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container-fluid">
                      <a className="navbar-brand" href="/">TripSocial</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                              data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                              aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNavDropdown">
                          <ul className="navbar-nav">

                              <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                     aria-expanded="false">
                                      Settings
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li><a className="dropdown-item" href="/register">Register</a></li>
                                      <li><a className="dropdown-item" href="/login">Login</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
          )
      }

     <RouterProvider router={router}/>
  </React.StrictMode>,
)
