import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Login from "./Login";

export default function Settings(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const navigate = useNavigate();

    const defaultUserInfo = JSON.parse(localStorage.getItem("user"))
    async function submitHandler(e){
        e.preventDefault();
        const jwt_token = JSON.parse(localStorage.getItem("jwt"));
        console.log(jwt_token.jwt)
        let user = JSON.parse(localStorage.getItem("user"))


        const updatedUser = {
            username,
            password,
            firstName,
            lastName,
            email,
            dateOfBirth,
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
                // setTimeout(function (){
                //     // localStorage.clear();
                //     // window.location.replace("/")
                //     navigate("/login")
                //     localStorage.clear();
                // }, 1000);
                setMessage("submitted successfully!");
            });
        // setUsername("");
        // setPassword("");
        lo
    }

    return<>
        <h1 className="settingsTitle">Settings</h1>
        <form className="settingsForm" onSubmit={submitHandler}>
            <p>{message}</p>
            <input
                type = "text"
                placeholder = "First name"
                defaultValue = {defaultUserInfo.firstName}
                onChange = {(e) => setFirstName(e.target.value)}
                className="loginInput"
            />
            <input
                type = "text"
                placeholder = "Last Name"
                defaultValue = {defaultUserInfo.lastName}
                onChange = {(e) => setLastName(e.target.value)}
                className="loginInput"
            />
            <input
                type = "date"
                placeholder = "Date of Birth"
                defaultValue = {defaultUserInfo.dateOfBirth}
                onChange = {(e) => setDateOfBirth(e.target.value)}
                className="loginInput"
            />
            <input
                type = "text"
                placeholder = "Email"
                defaultValue = {defaultUserInfo.email}
                onChange = {(e) => setEmail(e.target.value)}
                className="loginInput"
            />
            <input
                type = "text"
                placeholder = "Username"
                defaultValue = {defaultUserInfo.username}
                onChange = {(e) => setUsername(e.target.value)}
                className="settingsInput"
            />
            <input
                type = "password"
                placeholder = "Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                className="settingsInput"
            />

            <button type="submit"
                    className="btn btn-primary">Submit
            </button>
        </form>
    </>

}