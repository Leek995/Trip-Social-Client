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
        <h1>Additional PAge</h1>
        <Form onSubmit={submitHandler}>
            <input
                type = "text"
                placeholder = "Email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
            />
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
            <button type="submit">next</button>
        </Form>
    </>
}