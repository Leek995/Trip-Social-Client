import {PostList} from "../components/PostList.jsx";
import {useEffect, useState} from "react";

export default function Posts() {
    const jwt_token = JSON.parse(localStorage.getItem("jwt"));
    let user = JSON.parse(localStorage.getItem("user"))
    const [posts, setPosts] = useState([])
    async function fetchPost() {
        const response =
        await fetch(`${import.meta.env.VITE_ALL_POST}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt_token.jwt}`
            },
        });
        const postsData = await response.json();
        setPosts(postsData)
    }




    useEffect(() => {
        fetchPost();
    }, []);
    console.log(posts)
    return <>
        <h1 className="allPostTitle">All post</h1>
        <PostList posts={posts}/>

    </>
}