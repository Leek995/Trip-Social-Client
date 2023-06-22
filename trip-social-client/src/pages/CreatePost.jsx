import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function CreatePost(){
    const jwt_token = JSON.parse(localStorage.getItem("jwt"));
    let user = JSON.parse(localStorage.getItem("user"))
    const [postBody, setPostBody] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    async function submitHandler(e) {
        e.preventDefault()

        const post = {
            title,
            postBody,
            user
        };

        await fetch(`${import.meta.env.VITE_CREATE_POST}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt_token.jwt}`
            },
            body: JSON.stringify(post)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setTimeout(function () {

                    navigate("/")
                }, 1000);
                setMessage("submitted successfully!");
            });
        setPostBody("");
        setTitle("");
    }

    function deleteHandler(e){}
    return<>
        <div className="createPostContainer">
            <h1 className="createPostTitle">Create Post</h1>
            <form className="createPostForm">
                <p>{message}</p>
                <input
                    type = "text"
                    placeholder = "Title"
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                    className="createPostTitleInput"
                />
                <textarea
                    type = "text"
                    placeholder = "Write a about trip..."
                    value = {postBody}
                    onChange = {(e) => setPostBody(e.target.value)}
                    className="createPostBodyInput"
                />
            </form>
            <button id="createPostBtn" type="submit" onClick={submitHandler} className="btn btn-primary">Submit</button>
        </div>

    </>
}