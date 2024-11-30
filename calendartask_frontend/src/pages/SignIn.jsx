import { useForm } from 'react-hook-form';
import { Link, Form, redirect } from 'react-router-dom';


export async function action({request, params}){
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    // await createContact( updates);
    alert('hello....signing you in')
    return redirect(`/home`);
}

export default function Signin() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    return (
        <>
            <div className="h-screen  w-full md:w-3/4 xl:w-1/2 mx-auto  m-5 rounded-xl shadow-lg  bg-orange-100 text-red-900">
                <div className=" text-red-900 font-extrabold text-5xl text-center align-middle p-16 h-1/4 ">
                    TaskyTrack
                </div>
                <div className=" w-3/6 h-full mx-auto  md:w-3/6  ">
                
                    <Form className=' bg-orange-200 p-4 rounded-xl shadow-xl shadow-slate-400 mt-3' method="post" id="signup-form">
                <div className="p-2 text-center underline "> Sign in </div>
                        <label>
                            <span>Email</span>
                            <input
                                placeholder="...@gmail.com"
                                aria-label="Email"
                                type="email"
                                name="email"
                                defaultValue=""
                                className='drop-shadow-xl w-full p-4 rounded-lg mb-2'
                                {...register('email',{required: 'Email is required'})}
                            />
                            <div>{errors.email && errors.email.message}</div>
                        </label>
                        <label>
                            <span>Password</span>
                            <input
                                type="password"
                                name="pwd"
                                placeholder="password"
                                className='drop-shadow-xl w-full p-4 rounded-lg mb-2'
                                defaultValue=""
                                {...register('password',{required: 'Password is required'})}
                            />                            
                            <div>{errors.password && errors.password.message}</div>
                        </label>
                        <p className='flex flex-row justify-between'>
                            <div className='flex flex-row space-x-2'>
                            <button 
                            className='px-4 py-3 rounded-lg bg-blue-300 hover:bg-blue-500' 
                            type="submit" 
                            
                            >Sign in</button>
                            <button className='px-4 py-3 rounded-lg bg-red-300 hover:bg-red-500' type="reset">Cancel</button>
                            </div>
                        </p>
                    </Form>
                    <div className='text-center mt-5'>No account yet? <Link className='font-bold text-blue-600' to={'/signup'}>Sign up here</Link></div>
                </div>
            </div>

        </>
    );

}

