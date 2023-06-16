import {useState} from "react";


export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function submitHandler(e) {
        e.preventDefault();
        const user = {
            username,
            password,
        };

        const auth = btoa(`${username}:${password}`);
        await fetch(`${import.meta.env.VITE_LOGIN_ENDPOINT}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${auth}`
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.jwt)
            })




        setUsername("");
        setPassword("");
    }
    return(
        <>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
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
    )
}