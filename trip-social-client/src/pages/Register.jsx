import {useState} from "react";
import {Form, Link, useNavigate} from "react-router-dom";
import Additional from "./Additional";
import UsernameAndPasswordValidation from "../validations/UsernameAndPasswordValidation.js";
export default function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const navigate = useNavigate();

    function navy(e){
        e.preventDefault();
        const user = {
            firstName,
            lastName,
            dateOfBirth,
        };
        localStorage.setItem("user", JSON.stringify(user))
        navigate("/register/additional")
        // window.location.replace("/register/additional")

    }
    return(
        <>
            <h1 className="registerTitle">Register Page</h1>
            <form  className="loginForm" encType="multipart/form-data">
                <input
                    type = "text"
                    placeholder = "First name"
                    value = {firstName}
                    onChange = {(e) => setFirstName(e.target.value)}
                    className="loginInput"
                    required
                />
                <input
                    type = "text"
                    placeholder = "Last Name"
                    value = {lastName}
                    onChange = {(e) => setLastName(e.target.value)}
                    className="loginInput"
                    required
                />
                <input
                    type = "date"
                    placeholder = "Date of Birth"
                    value = {dateOfBirth}
                    onChange = {(e) => setDateOfBirth(e.target.value)}
                    className="loginInput"
                    required
                />
                <button onClick={navy} type="submit"
                        className="btn btn-primary">next
                </button>

            </form>
        </>
    )
}