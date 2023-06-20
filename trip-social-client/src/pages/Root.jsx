import {useEffect, useState} from "react";
import Settings from "./Settings";
import {Link, useNavigate, Outlet, useLoaderData} from "react-router-dom";

export async function loader(){
    const loggedUser = JSON.parse(localStorage.getItem("user"))
    if(loggedUser.id){
        const jwt_token = JSON.parse(localStorage.getItem("jwt"));
        const response = await fetch(`${import.meta.env.VITE_SETTINGS_EDIT_USER_INPUT}/${loggedUser.id}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt_token.jwt}`
            },
        });
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log(loggedUser.id)
        return { user };
    }else{
        const jwt_token = JSON.parse(localStorage.getItem("jwt"));
        const response = await fetch(`${import.meta.env.VITE_HOME_USER_INPUT}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt_token.jwt}`
            },
        });
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        return { user };
    }

}
export default function Root(){
    const {user} = useLoaderData();
    console.log("passed user", user)

    function logOutUser(){
        localStorage.clear();
    }

    return<>
        <h1>Home</h1>
        <ul>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <button onClick={logOutUser}><Link to="/login">Logout</Link></button>
            </li>
            <li>
                <Link to="/settings">Settings</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </ul>
        <><Outlet/></>
        <h1>User Details</h1>
        <p>User ID: {user.id}</p>
        <p>User Role: {user.roles}</p>
        <p>User Username: {user.username}</p>
        <p>User Password: {user.password}</p>
    </>
}



