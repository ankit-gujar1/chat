import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import MessageContainer from '../components/messages/MessageContainer'

const Home = () => {
    return (
        <div className='flex h-screen w-full rounded-lg'>
            <div className='overflow-y-auto w-[25%]'>
                <Sidebar />
            </div>
            <div className='overflow-y-auto w-[75%]'>
                <MessageContainer />
            </div>
            {/* <h1>gg</h1> */}
        </div>
    )
}

export default Home
