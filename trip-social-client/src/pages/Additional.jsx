import {Form, Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Additional(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    let userFromStorage = JSON.parse(localStorage.getItem("user"))

    async function submitHandler(e) {
        e.preventDefault();
        userFromStorage.username = username;
        userFromStorage.password = password;
        userFromStorage.email = email;


        await fetch(`${import.meta.env.VITE_REGISTER_ENDPOINT}`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(userFromStorage)
        }).then(response => response.json())
            .then(data => {
                localStorage.setItem("user", JSON.stringify(data))
        })
        // window.location.replace("/register/upload")
        navigate("/register/upload");
    }

    return<>
        <h1 className="registerTitle">Additional Information</h1>
        <form className="loginForm" onSubmit={submitHandler}>
            <input
                type = "text"
                placeholder = "Email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                className="loginInput"
                required
            />
            <input
                type = "text"
                placeholder = "Username"
                value = {username}
                onChange = {(e) => setUsername(e.target.value)}
                className="loginInput"
                required
            />
            <input
                type = "password"
                placeholder = "Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                className="loginInput"
                required
            />

            <button type="submit"
                    className="btn btn-primary">next
            </button>
        </form>
    </>
}