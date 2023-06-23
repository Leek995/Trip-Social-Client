import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export default function ProfileImageUpload(){
    const [image, setImage] = useState("");
    const navigate = useNavigate();
    let userFromStorage = JSON.parse(localStorage.getItem("user"))
    async function submitHandler(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image)
        // userFromStorage.image = image;

        axios.post(`http://localhost:8080/register/${userFromStorage.id}/image`, formData).then(res => {
            console.log(res)
        })



        console.log(image)
        navigate("/login")
        // window.location.replace("/login")
    }
    function handleImage(e){
        console.log(e.target.files[0].name)
        setImage(e.target.files[0])
    }

    return<>
        <h1 className="registerTitle">Upload</h1>
        <form className="loginForm" onSubmit={submitHandler} encType="multipart/form-data">
            <input
                type = "file"
                placeholder = "image"
                name="image"
                onChange = {handleImage}
                className="uploadBtn"
                required
            />

            <button type="submit"
                    className="btn btn-primary">Submit
            </button>
        </form>
    </>
}