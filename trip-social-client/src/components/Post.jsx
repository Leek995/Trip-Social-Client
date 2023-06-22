import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Post = ({post}) => {
    const jwt_token = JSON.parse(localStorage.getItem("jwt"));
    let user = JSON.parse(localStorage.getItem("user"))
    const [postBody, setPostBody] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [id, setID] = useState("")

    // async function editHandler(post_id) {
    //     const post = {
    //                 title,
    //                 postBody,
    //                 user
    //             };
    //     const response = await fetch(`${import.meta.env.VITE_ALL_POST}/${post_id}/edit-post`, {
    //                     method: "PUT",
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                         Authorization: `Bearer ${jwt_token.jwt}`
    //                     },
    //                     body: JSON.stringify(post)
    //                 })
    //     const postsData = await response.json();
    //     setPosts(postsData)
    //
    // }

    async function editHandler() {
        const post_id = JSON.parse(localStorage.getItem("setPostId"))
        const post = {
            title,
            postBody,
            user
        };
        await fetch(`${import.meta.env.VITE_ALL_POST}/${post_id}/edit-post`, {
            method: "PUT",
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
    }

    function getIdFromPost(){
        console.log("you clicked " + post.id)
        localStorage.setItem("setPostId", JSON.stringify(post.id))
    }
        //
        // setPostBody("");
        // setTitle("");

    return (

            <>
                <div>
                    <h5>title: {post.title}</h5>
                    <p>{post.postBody}</p>
                    <p>{post['user'].username || "anon"}</p>

                    <button onClick={getIdFromPost} type="button" className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                        Edit
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <p>{message}</p>
                                        <input
                                            type="text"
                                            placeholder="write about trip"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            placeholder="write about trip"
                                            value={postBody}
                                            onChange={(e) => setPostBody(e.target.value)}
                                        />
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close
                                            </button>
                                            <button onClick={editHandler} type="submit"
                                                    className="btn btn-primary">Save changes
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </>


    )
}