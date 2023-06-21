import {useEffect, useState} from "react";
import Settings from "./Settings";
import {Link, useNavigate, Outlet, useLoaderData} from "react-router-dom";

export async function loader(){
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
export default function Root() {
    // utilizing local storage to temporarily show any update from settings
    const user1 = JSON.parse(localStorage.getItem("user"))

    const {user} = useLoaderData();
    console.log("passed user", user)


    fetch(`http://localhost:8080/register/image/${user1.imageData.name}`)
        .then(r => r.blob())
        .then(blob => {
            let url = URL.createObjectURL(blob)
            localStorage.setItem("ava", JSON.stringify(url))
            const img = new Image();
            img.src=url;
            img.onload = () => {
                document.getElementById("avatar").setAttribute("src",url)
            }

        })

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
        <p>User ID: {user1.id}</p>
        <p>User Role: {user1.roles}</p>
        <p>User Username: {user1.username}</p>
        <p>User Password: {user1.password}</p>
        <p>User Email: {user1.email}</p>
        <p>User First Name: {user1.firstName}</p>
        <p>User Last Name: {user1.lastName}</p>
        <p>User Last Name: {user1.dateOfBirth}</p>
        <p>User Image: {user1.imageData.name}</p>
        <img id="avatar"/>
    </>
}



