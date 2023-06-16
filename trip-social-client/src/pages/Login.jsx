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
        await fetch(`http://localhost:8080/api/auth/token`, {
            method: "POST",
            headers: {
                // "Content-type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${auth}`
            },
        });


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