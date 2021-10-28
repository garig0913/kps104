import { useState } from "react";
import Navigation from "../Navigation"
import Label from "../Label";
import Button from "../Button";
import Form from "../Form";
import swal from "sweetalert";

const Profile = () => {
    const navigation = [
        {
            title: "home",
            path: "/",
        },
        {
            title: "login",
            path: "/login",
        },
        {
            title: "logout",
        }
    ];

    const [inputPost, setPost] = useState('')

    const submitHandler = (e) => {
        const localUser = JSON.parse(localStorage.getItem('user'))
        e.preventDefault()
        fetch("http://localhost:3001/post", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: localUser.username,
                id: localUser._id,
                post: inputPost
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error("Хэрэглэгч бүртгэхэд алдаа гарлаа");
                }
                return response.json();
            })
            .then((result) => swal(result.message, "user registered", "success"))
            .catch((err) => {
                swal("error", err.message, "error");
            });
    }

    return <div className='flex flex-col'>
        <div className="w-full flex items-center justify-between bg-green-400 font-bold text-white">
            <div className="pl-4">
                <h1 className="text-3xl">Logo</h1>
            </div>
            <Navigation nav={navigation} />
        </div>

        <Form submitHandler={submitHandler}>
            <textarea onChange={(e) => setPost(e.target.value)} value={inputPost} className='mx-10 my-6 py-6 border-2 border-blue-900' />
            <Button bg='indigo' val='Login' type='normal' />
        </Form>
    </div>
}

export default Profile

