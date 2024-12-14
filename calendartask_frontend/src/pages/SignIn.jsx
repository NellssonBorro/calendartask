import { Link, Form, redirect } from 'react-router-dom';
import toast from 'react-hot-toast';
import { API_BASE_URL } from '../util';
import { useNavigate, useActionData } from 'react-router-dom';
import { useState } from 'react';

export async function action({ request }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);    
    // const navigate = useNavigate();
    
    try {

        const res = await fetch(`${API_BASE_URL}/checker/signin`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(updates),
        });
        const rest = await res.json();
        if (res.status == 200) {
            toast.success("You have been logged in successfully!")
            console.log("Debug message:", JSON.stringify(rest, null, 2));
            sessionStorage.setItem('userData', JSON.stringify(rest))
            return redirect('/home')
            // navigate('/home', { state: { userData: rest } })
        } else {
            toast.error("Incorrect login credentials!")           
        }
    } catch (error) {
        toast.error("An Unknown error occured: "+ error.message)
        //for no internet
        const rest = {
            username: "nelly",
            _id: "nb001",
            email: "nelly@test.com",
            avatar: "https://avatarhub/free/nellyface.png"
        }
        sessionStorage.setItem('userData', JSON.stringify(rest))
            return redirect('/home')
    }
}


export default function Signin() {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const actionData = useActionData()
    const navigate = useNavigate()

    const handleSignOut = async () => {
        try {

            const res = await fetch(`${API_BASE_URL}/checker/signout`, {
                credentials: 'include',
            });
            const message = await res.json();
            toast.success(message.message)
            // updateUser(null)
            navigate('/')
        } catch (error) {
            toast.error(error)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="h-screen  w-full md:w-3/4 xl:w-1/2 mx-auto  m-5 rounded-xl shadow-lg  bg-orange-100 text-red-900">
                <div className=" text-red-900 font-extrabold text-5xl text-center align-middle p-16 h-1/4 ">
                    TaskyTrack
                </div>
                <div className=" w-3/6 h-full mx-auto  md:w-3/6  ">

                    <Form className=' bg-orange-200 p-4 rounded-xl shadow-xl shadow-slate-400 mt-3' method="post" id="signin-form">
                        <div className="p-2 text-center underline "> Sign in </div>
                        <label>
                            <span>Email</span>
                            <input
                                placeholder="...@gmail.com"
                                aria-label="Email"
                                type="email"
                                name="email"
                                value={formData?.email || ""}
                                onChange={handleChange}
                                className='drop-shadow-xl w-full p-4 rounded-lg mb-2'
                            />
                            <div>{actionData?.errors?.email && <p>Error: {actionData.errors.email}</p>}</div>
                        </label>
                        <label>
                            <span>Password</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                value={formData?.password || ""}
                                onChange={handleChange}
                                className='drop-shadow-xl w-full p-4 rounded-lg mb-2'
                            />
                            <div>{actionData?.errors?.password && <p>Error: {actionData.errors.password}</p>}</div>
                        </label>
                        <p className='flex flex-row justify-between'>
                            <div className='flex flex-row space-x-2'>
                                <button
                                    className='px-4 py-3 rounded-lg bg-blue-300 hover:bg-blue-500'
                                    type="submit"

                                >Sign in</button>
                                <button className='px-4 py-3 rounded-lg bg-red-300 hover:bg-red-500' type="reset">Cancel</button>
                                <button className='px-4 py-3 rounded-lg bg-red-300 hover:bg-red-500' type="button" onClick={handleSignOut}>Out</button>
                            </div>
                        </p>
                    </Form>
                    <div className='text-center mt-5'>No account yet? <Link className='font-bold text-blue-600' to={'/signup'}>Sign up here</Link></div>
                </div>
            </div>

        </>
    );

}

