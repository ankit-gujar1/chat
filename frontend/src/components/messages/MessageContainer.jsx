import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {

  const {selectedConversation,setSelectedConversation}=useConversation();

  useEffect(()=>{
    return()=>setSelectedConversation(null)
  },[setSelectedConversation])

  return (
    <div className='flex flex-col'>
      {!selectedConversation ? (
				<NoChatSelected />
			) : (
      <>
        <div className='flex items-center gap-2 w-full bg-indigo-600 py-3 rounded-b-lg px-5 sticky top-0 z-10'>
        <img className='size-12' src={selectedConversation.profilePic} />
      {/* <span>Ankit</span> */}
          <span className='label-text text-white font-bold text-xl'>{selectedConversation.fullName}</span>
        </div>

        <Messages />
        <MessageInput />
      </>
      )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
	const { user } = useAuthContext();
	return (
    <div className='flex h-screen items-center gap-2 w-full bg-white py-3 rounded-b-lg px-5 sticky top-0 z-10'>
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center text-4xl text-indigo-600 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {user && user.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
			</div>
		</div>
    </div>
	);
};