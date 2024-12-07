
import { Link, useLocation } from 'react-router-dom';
import Task from './task';
// import {useUser} from '../context/UserContext'
// import toast from 'react-hot-toast';
// import { useEffect } from 'react';


export default function Home() {
    // alert("homeeee")
    // const {updateUser} = useUser()
    const location = useLocation()
    const userData = location.state?.userData

    console.log("Location state:", location.state);


    // useEffect(() =>{

    //         if(location.state?.success){   alert("home in")
    //             updateUser(location.state.data)    
    //             toast.success(location.state.message)
    //         }else{alert("home out")
    //             toast.error(location.state.message)
    //         }
    //    }, [location, updateUser])

    return (
        <>
            <div className="h-screen  w-full md:w-3/4 xl:w-1/2 mx-auto  m-5 rounded-xl shadow-lg  bg-orange-100 text-red-900">
                <div className="flex flex-row justify-between bg-orange-200 p-2 ">
                    <div className="bg-orange-100 shadow-lg rounded-xl opacity-60 flex flex-row px-2 space-x-2">
                        <div className="rounded-full shadow-xl bg-fixed" >
                            <img src="../../account_circle.png" alt="G" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div>User One Name</div>
                            <div>userone@email.com</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-red-900 font-extrabold  text-center  ">
                        TaskyTrack
                    </div>
                </div>
                <div className="flex flex-row space-x-1 h-full">
                    <div className="py-1 px-0 flex space-x-1 flex-col bg-orange-300 basis-5/12">
                        <div className='focus-within:outline-red-300 space-x-1 rounded-xl  p-1  mb-2  px-1 flex bg-white'>
                            <label>S</label>
                            <input
                                type="text"
                                name="qry"
                                placeholder=" search tasks"
                                className='focus:outline-none w-full'
                                defaultValue=""
                            />
                        </div>
                        <div className='' >
                            <Task />
                        </div>
                    </div>
                    <div className=" bg-yellow-100 basis-7/12 ">
                        {/* <div>{userData.username}</ div>
                        <div>{userData._id}</div>
                        <div>{userData.email}</div>
                        <div>{userData.avatar}</div> */}
                        <div>{JSON.stringify(userData, null, 2)}</div>
                    </div>
                </div>




            </div>

        </>
    );

}

