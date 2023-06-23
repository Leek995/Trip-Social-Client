import {useState} from "react";
import {useNavigate} from "react-router-dom";
import UsernameAndPasswordValidation from "../validations/UsernameAndPasswordValidation.js";


export default function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    async function submitHandler(e) {
        e.preventDefault();
        const auth = btoa(`${username}:${password}`);
        if(error){
            setUsername("");
            setPassword("");
        }else if(!error){
            await fetch(`${import.meta.env.VITE_LOGIN_ENDPOINT}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Basic ${auth}`
                },
            }).then(async response => {
                if (response.status === 401) {
                    setError("Invalid Password or Username")
                } else if (response.status === 200) {
                    localStorage.setItem('jwt', JSON.stringify(await response.json()));
                    setTimeout(function (){
                        window.location.replace("/")
                    }, 1000);
                    setError("submitted successfully!");
                }
            });
            setUsername("");
            setPassword("");
        }
    }

    return(
        <>
            <h1 className="loginTitle">Login</h1>
            <form className="loginForm" onSubmit={submitHandler}>
                <p className="loginError">{error}</p>
                <input
                    type = "text"
                    placeholder = "Username"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                    className="loginInput"
                />

                <input
                    type = "password"
                    placeholder = "Password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    className="loginInput"
                />
                <button onClick={()=>setError(UsernameAndPasswordValidation(username, password))} type="submit"
                        className="btn btn-primary">Submit
                </button>

            </form>
        </>
    )
}