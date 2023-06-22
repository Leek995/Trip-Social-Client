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


    return<>
        <div className="profileCard">
            <img className="profileImage" id="avatar"/>
            <div className="profileName">
                <h4 className="profileUsername">{user1.username}</h4>
                <span className="profileFirstName">{user1.firstName}</span>
                <span className="profileLastName">{user1.lastName}</span>
            </div>

        </div>

        <><Outlet/></>
    </>
}



