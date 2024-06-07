import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';
import useLogin from '../hooks/useLogin';
import { Toaster } from 'react-hot-toast';

const Login = () => {

    const [username,setUsername]=useState();
    const [password,setPassword]=useState();

    const navigate=useNavigate();

    const {user}=useAuthContext();

    const {login,loading}=useLogin();

    useEffect(()=>{
        if(user){
            navigate('/');
        }
    },[user])

    const userLogin=(e)=>{
        e.preventDefault();
        login(username,password);
    }

    return (
        <div className='flex flex-col items-center justify-center w-full min-w-96 min-h-screen mx-auto'>
            <p className='text-3xl font-bold'>Login to <span className='text-indigo-600'>Chatt</span></p>

            <form className='w-[35%]' onSubmit={userLogin}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' onChange={(e)=>setUsername(e.target.value)}/>
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        className='w-full input input-bordered h-10'
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <Link to={'/signup'} className='text-sm  hover:underline hover:text-indigo-600 mt-2 inline-block'>
                    {"Don't"} have an account?
                </Link>

                <div>
                    <button className='btn btn-primary w-full btn-sm mt-2' disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Login"}
                    </button>
                </div>
            </form>
            <Toaster/>
        </div>
    )
}

export default Login
