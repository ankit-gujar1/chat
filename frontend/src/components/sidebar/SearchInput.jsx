import React from 'react'

const SearchInput = () => {
    return (
        <form className="flex justify-center items-center ms-2 mt-2 pe-3">
            <div>
                <input type="text" placeholder="Type here" className="input input-bordered me-1 w-[100%] max-w-xs rounded-full" />
            </div>

            <div>
                <button className='rounded-full bg-indigo-600 p-[11px] ms-1' type="submit">
                    <svg className='size-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </button>
            </div>
        </form>
    )
}

export default SearchInput
