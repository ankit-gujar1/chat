import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../../skeletons/MessageSkeleton';

const Messages = () => {
  const {loading,messages}=useGetMessages();

  const lastMessageRef = useRef();
  
  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

  return (
    <div className='flex-1 px-4 mb-20'>
      {/* <Message/> */}

      {!loading && messages.length>0 && messages.map((i)=>(
        <div key={i._id} ref={lastMessageRef}>
          <Message message={i} />
        </div>
      ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
    </div>
  )
}

export default Messages
