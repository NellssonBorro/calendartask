import { Link, Form } from 'react-router-dom';
import toast from 'react-hot-toast';
import { API_BASE_URL } from '../util';
import { useNavigate,useActionData } from 'react-router-dom';
import { useEffect, useState } from 'react';


export async function action({ request }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    // await createContact( updates);
    try{
        
        const res = await fetch(`${API_BASE_URL}/checker/signup`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updates),
        });
        const data = await res.json();
        if(res.status == 200){
            return { success: true, message: 'Sign Up Successful. Now you can log in', redirectTo:'/' };
        }else{
            return{success: false, errors: data.errors || {}, message: data.message || 'Unknown error occurred'};//, redirectTo:'/'}
        }
    }catch(error){
        return {success: false, errors:{}, message: 'Something went wrong! '+error.message}//, redirectTo:'/'}
    }
}

export default function Signup() {
    const [formData, setFormData] = useState({username: '', email: '', password: ''})
    const actionData = useActionData()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

   useEffect(() =>{
    if(actionData){

        if(actionData.success){        
            toast.success(actionData.message)
        }else{
            toast.error(actionData.message)
        }
        
        if(actionData?.redirectTo){
            navigate(actionData.redirectTo)
        }
    }
   }, [actionData, navigate])

    return (
        <>
            <div className="h-screen  w-full md:w-3/4 xl:w-1/2 mx-auto  m-5 rounded-xl shadow-lg  bg-orange-100 text-red-900">
                <div className=" text-red-900 font-extrabold text-5xl text-center align-middle p-16 h-1/4 ">
                    TaskyTrack
                </div>
                <div className=" w-3/6 h-full mx-auto  md:w-3/6  ">

                    <Form className=' bg-orange-200 p-4 rounded-xl shadow-xl shadow-slate-400 mt-3' method="post" id="signup-form">
                        <div className="p-2 text-center underline "> New User Sign Up </div>
                        <label>
                            <span>Username</span>
                            <input
                                placeholder="username"
                                aria-label="Username"
                                type="text"
                                name="username"
                                value={formData?.username || ""}
                                onChange={handleChange}
                                className='w-full p-4 rounded-lg mb-2'
                                
                            />
                            <div>{actionData?.errors.username && <p>Error: {actionData?.errors.username}</p>}</div>
                        </label>
                        <label>
                            <span>Email</span>
                            <input
                                placeholder="...@gmail.com"
                                aria-label="Email"
                                type="email"
                                name="email"
                                value={formData?.email || ""}
                                onChange={handleChange}
                                
                                className='w-full p-4 rounded-lg mb-2'
                            />
                            <div>{actionData?.errors.email && <p>Error: {actionData?.errors.email}</p>}</div>
                        </label>
                        <label>
                            <span>Password</span>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className='w-full p-4 rounded-lg mb-2'
                                value={formData?.password  || ""}
                                onChange={handleChange}
                               
                            />
                            <div>{actionData?.errors.password && <p>Error: {actionData?.errors.password}</p>}</div>
                        </label>
                        <p className='flex flex-row justify-between'>
                            <div className='flex flex-row space-x-2'>
                                <button
                                    className='px-4 py-3 rounded-lg bg-blue-300 hover:bg-blue-500'
                                    type="submit"

                                >Sign Up</button>
                                <button className='px-4 py-3 rounded-lg bg-red-300 hover:bg-red-500' type="reset">Cancel</button>
                            </div>
                        </p>
                    </Form>
                    <div className='text-center mt-5'>Have an account? <Link className='font-bold text-blue-600' to={'/'}>Sign in here</Link></div>
                </div>
            </div>

        </>
    );

}

