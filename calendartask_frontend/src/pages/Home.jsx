
import { Link, useLocation } from 'react-router-dom';
import Task from './task';
// import {useUser} from '../context/UserContext'
// import toast from 'react-hot-toast';
// import { useEffect } from 'react';
import { Form, useLoaderData } from "react-router-dom";
import { API_BASE_URL } from '../util';
import toast from 'react-hot-toast';

// export async function loader({ params }) {    
//     // const userData = JSON.parse(sessionStorage.getItem('userData') || '{}')
//     // alert(userData._id)
//     // console.log("Debug userData:",userData._id);
//     try {
//         const res = await fetch(`${API_BASE_URL}/tasks/all/${userData._id}`, {
//             method: 'GET',
//             headers: {
//                 'Content-type': 'application/json',
//             },
//         });
//         const tasks = await res.json();
//         if (res.status == 200) {
//             return { tasks }
//         } else {
//             toast.error("Could not load your tasks!")
//         }
//     } catch (error) {
//         toast.error("An Unknown error occured: " + error.message)
//     }
//     return { tasks: [] }; // Default to an empty array if tasks cannot be fetched
// }

export default function Home() {
    // const {tasks} = useLoaderData();

   
    
    // const {updateUser} = useUser()
    const location = useLocation()
    // const userData = location.state?.userData
    // const userData =  sessionStorage.getItem('userData') || '{}'
    const userData = JSON.parse(sessionStorage.getItem('userData') || '{}')
    var tasks = null
    try {
                const res =  fetch(`${API_BASE_URL}/tasks/all/${userData._id}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                    },
                });
                tasks =  res.json();
                if (res.status == 200) {
                    return { tasks }
                } else {
                    toast.error("Could not load your tasks!")
                }
            } catch (error) {
                toast.error("An Unknown error occured: " + error.message)
            }



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
                            <div className='font-bold'>{userData.username}</div>
                            <div className='italic'>{userData.email}</div>
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
                        <div className='flex flex-col gap-1' >
                            {/* {
                                userData.map((item) => (
                                    <Task key={item._id} task={item} />
                                ))
                            } */}
                            {/* <Task task={userData} /> */}
                            {
                                tasks?.map((item) => (
                                    <Task key={item._id} task={item} />
                                ))
                            }
                            {/* <Task task={task}/> */}
                        </div>
                    </div>
                    <div className=" bg-yellow-100 basis-7/12 ">
                        {/* <div>{JSON.stringify(tasks, null, 2)}</div> */}
                        <div>{userData.username}</ div>
                        <div>{userData._id}</div>
                        <div>{userData.email}</div>
                        <div>{userData.avatar}</div>
                        <div>{JSON.stringify(userData, null, 2)}</div>
                    </div>
                </div>




            </div>

        </>
    );

}

