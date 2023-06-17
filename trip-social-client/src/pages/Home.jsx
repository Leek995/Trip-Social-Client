import {useState} from "react";

export default function Home(){
    const user = JSON.parse(localStorage.getItem("user"));
    const jwt_token = JSON.parse(localStorage.getItem("jwt"));
    // const auth = btoa(`${user.username}:${user.password}`);
    console.log(jwt_token.jwt)

    // Fetch items by user
    async function fetchUser(){
        try {
            await fetch(`${import.meta.env.VITE_HOME_USER_INPUT}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt_token.jwt}`
                },
            })
                .then(response => response.json())
                .then(data => console.log(data))
        } catch (err) {
            console.log("Oh no an error! ", err)
        }
    }
    fetchUser();
    return<>
        <h1>Home</h1>
    </>
}