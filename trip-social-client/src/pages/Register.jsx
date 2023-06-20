import {useState} from "react";
import {Form, Link, useNavigate} from "react-router-dom";
import Additional from "./Additional";
export default function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const navigate = useNavigate();
    async function submitHandler(e){
        e.preventDefault();
        const user = {
            // username,
            // password,
            firstName,
            lastName,
            // email,
            // image,
            dateOfBirth,
        };

        // await fetch(`${import.meta.env.VITE_REGISTER_ENDPOINT}`, {
        //     method: "POST",
        //     headers: {"Content-type" : "application/json"},
        //     body: JSON.stringify(user)
        // });

        // setUsername("");
        // setPassword("");
    }
    function navy(e){
        e.preventDefault();
        const user = {
            // username,
            // password,
            firstName,
            lastName,
            // email,
            // image,
            dateOfBirth,
        };
        localStorage.setItem("user", JSON.stringify(user))
        window.location.replace("/register/additional")

    }
    return(
        <>
            <h1>Register Page</h1>
            <Form onSubmit={submitHandler} encType="multipart/form-data">
                <input
                    type = "text"
                    placeholder = "First name"
                    value = {firstName}
                    onChange = {(e) => setFirstName(e.target.value)}
                />
                <input
                    type = "text"
                    placeholder = "Last Name"
                    value = {lastName}
                    onChange = {(e) => setLastName(e.target.value)}
                />
                {/*<input*/}
                {/*    type = "text"*/}
                {/*    placeholder = "Email"*/}
                {/*    value = {email}*/}
                {/*    onChange = {(e) => setEmail(e.target.value)}*/}
                {/*/>*/}
                {/*<input*/}
                {/*    type = "text"*/}
                {/*    placeholder = "Username"*/}
                {/*    value = {username}*/}
                {/*    onChange = {(e) => setUsername(e.target.value)}*/}
                {/*/>*/}
                {/*<input*/}
                {/*    type = "text"*/}
                {/*    placeholder = "Password"*/}
                {/*    value = {password}*/}
                {/*    onChange = {(e) => setPassword(e.target.value)}*/}
                {/*/>*/}

                {/*<input*/}
                {/*    type = "file"*/}
                {/*    placeholder = "Image"*/}
                {/*    value = {image}*/}
                {/*    onChange = {(e) => setImage(JSON.parse(e.target.value))}*/}
                {/*/>*/}
                <input
                    type = "date"
                    placeholder = "Date of Birth"
                    value = {dateOfBirth}
                    onChange = {(e) => setDateOfBirth(e.target.value)}
                />

                {/*<button type = "Submit">Submit</button>*/}
                <button onClick={navy}>next</button>
            </Form>
        </>
    )
}