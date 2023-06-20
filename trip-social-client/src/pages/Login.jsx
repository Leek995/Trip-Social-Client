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
                        navigate("/")
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
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <p>{error}</p>
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
                <button onClick={()=>setError(UsernameAndPasswordValidation(username, password))} type = "Submit">Submit</button>
            </form>
        </>
    )
}