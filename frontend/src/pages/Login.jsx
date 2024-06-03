import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full min-w-96 mx-auto'>
            <p className='text-3xl font-bold'>Login to <span className='text-indigo-600'>Chatt</span></p>

            <form className='w-[35%]'>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        className='w-full input input-bordered h-10'
                    />
                </div>
                <a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
                    {"Don't"} have an account?
                </a>

                <div>
                    <button className='btn btn-primary w-full btn-sm mt-2'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
