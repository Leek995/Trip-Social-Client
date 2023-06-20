import {useState} from "react";
export default function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    async function submitHandler(e){
        e.preventDefault();
        const user = {
            username,
            password,
            firstName,
            lastName,
            email,
            image,
            dateOfBirth,
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

                <input
                    type = "file"
                    placeholder = "Image"
                    value = {image}
                    onChange = {(e) => setImage(e.target.value)}
                />
                <input
                    type = "date"
                    placeholder = "Date of Birth"
                    value = {dateOfBirth}
                    onChange = {(e) => setDateOfBirth(e.target.value)}
                />
                <button type = "Submit">Submit</button>
            </form>
        </>
    )
}