import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Login from "./Login";

export default function Settings(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    async function submitHandler(e){
        e.preventDefault();
        const jwt_token = JSON.parse(localStorage.getItem("jwt"));
        console.log(jwt_token.jwt)
        let user = JSON.parse(localStorage.getItem("user"))


        const updatedUser = {
            username,
            password
        };

        await fetch(`${import.meta.env.VITE_SETTINGS_EDIT_USER_INPUT}/${user.id}/edit-profile`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt_token.jwt}`
            },
            body: JSON.stringify(updatedUser)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                localStorage.setItem("user", JSON.stringify(data))
                setTimeout(function (){
                    // localStorage.clear();
                    // window.location.replace("/")
                    navigate("/")
                }, 1000);
                setMessage("submitted successfully!");
            });
            setUsername("");
            setPassword("");
    }

    return<>
        <h1>Settings Page</h1>
        <form onSubmit={submitHandler}>
            <p>{message}</p>
            <input
                type = "text"
                placeholder = "Username"
                value = {username}
                onChange = {(e) => setUsername(e.target.value)}
            />

            <input
                type = "text"
                placeholder = "Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
            />
            <button type = "Submit">Submit</button>
        </form>
    </>

}