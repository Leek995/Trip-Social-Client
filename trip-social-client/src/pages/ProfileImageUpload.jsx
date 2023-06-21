import {useState} from "react";
import axios from "axios";
import {Form} from "react-router-dom";

export default function ProfileImageUpload(){
    const [image, setImage] = useState("");
    let userFromStorage = JSON.parse(localStorage.getItem("user"))
    async function submitHandler(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image)
        // userFromStorage.image = image;

        axios.post(`http://localhost:8080/register/${userFromStorage.id}/image`, formData).then(res => {
            console.log(res)
        })

        // await fetch(`http://localhost:8080/register/image`,{
        //     method: "POST",
        //     body: JSON.stringify(formData),
        // });

        console.log(image)
        // window.location.replace("/login")
    }
    function handleImage(e){
        console.log(e.target.files[0].name)
        setImage(e.target.files[0])
    }

    return<>
        <h1>Upload</h1>
        <form onSubmit={submitHandler} encType="multipart/form-data">
            <input
                type = "file"
                placeholder = "image"
                name="image"
                onChange = {handleImage}
            />
            <button type="submit">Submit</button>
        </form>
    </>
}