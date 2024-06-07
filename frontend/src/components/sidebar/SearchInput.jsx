import React from 'react'
import useLogout from '../../hooks/useLogout'

const SearchInput = () => {

    const { loading, logout } = useLogout();

    return (
        <div className='flex justify-center items-center'>
            <form className="flex justify-center items-center ps-2 pe-3 sticky z-10 top-0 bg-white py-4">
                <div>
                    <input type="text" placeholder="Type here" className="input input-bordered me-1 w-[100%] max-w-xs rounded-full" />
                </div>

                <div>
                    <button className='rounded-full bg-indigo-600 p-[11px] ms-1' type="submit">
                        <svg className='size-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </button>
                </div>


            </form>
            <button onClick={logout} className='rounded-full bg-indigo-600 p-[11px] pe-4 ms-1'>
                <svg className='size-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            </button>
        </div>
    )
}

export default SearchInput
