import React, { useEffect } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import MessageContainer from '../components/messages/MessageContainer'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const Home = () => {

    const {user}=useAuthContext();

    const navigate=useNavigate();

    useEffect(()=>{
        if(!user){
            navigate('/login');
            return;
        }
    },[user])
    
    return (
        <div className='flex h-screen w-full rounded-lg'>
            <div className='overflow-y-auto w-[25%]'>
                <Sidebar />
            </div>
            <div className='overflow-y-auto w-[75%] shadow-2xl'>
                <MessageContainer />
            </div>
            {/* <h1>gg</h1> */}
        </div>
    )
}

export default Home
