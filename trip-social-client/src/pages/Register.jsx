import {useState} from "react";
export default function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    async function submitHandler(e){
        e.preventDefault();
        const user = {
            username,
            password
        };

        await fetch(`${import.meta.env.VITE_REGISTER_ENDPOINT}`, {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(user)
        });

        setUsername("");
        setPassword("");
    }
    return(
        <>
            <h1>Register Page</h1>
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