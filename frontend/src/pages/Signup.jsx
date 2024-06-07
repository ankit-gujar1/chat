import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useSignup from '../hooks/useSignup';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const Signup = () => {
    const [fullName,setFullName]=useState();
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const [gender,setGender]=useState();
    
    const navigate=useNavigate();

    const {user}=useAuthContext();

    const {signup,loading}=useSignup();

    const signupUser=(e)=>{
        e.preventDefault();
        signup(fullName,username,password,confirmPassword,gender);
    }

    useEffect(()=>{
        if(user){
            navigate('/');
        }
    },[user])

    return (
        <div className='flex flex-col items-center justify-center w-full min-h-screen min-w-96 mx-auto'>
            <p className='text-3xl font-bold'>Signup to <span className='text-indigo-600'>Chatt</span></p>

            <form className='w-[35%]' onSubmit={signupUser}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type='text' placeholder='Enter fullname' className='w-full input input-bordered h-10' onChange={(e)=>{setFullName(e.target.value)}} />
                </div>

                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' onChange={(e)=>{setUsername(e.target.value)}}/>
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10' onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Gender</span>
                    </label>
                    <select className="select select-bordered w-full font-bold" onChange={(e)=>{setGender(e.target.value)}}>
                        <option disabled selected>Select Gender</option>
                        <option value={'male'}>Male</option>
                        <option value={'female'}>Female</option>
                    </select>
                </div>

                <Link to={'/login'} className='text-sm  hover:underline hover:text-indigo-600 mt-2 inline-block'>
                    Already have an account?
                </Link>

                <div>
                    <button className='btn btn-primary w-full btn-sm mt-2' disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Signup"}
                    </button>
                </div>
            </form>
            <Toaster/>
        </div>
    )
}

export default Signup
