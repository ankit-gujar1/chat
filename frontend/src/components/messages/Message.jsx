import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
  // console.log(message);
  const { user } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === user._id;

  const chatClass = fromMe ? "chat-end" : "chat-start";

  const profilePic = fromMe ? user.profilePic : selectedConversation?.profilePic;

  const formattedTime = extractTime(message.createdAt);

  return (
    <>

      <div className={`chat ${chatClass}`}>
        <div className="chat-image avatar">
          <div className="w-12 rounded-full">
            <img className='' src={profilePic} />
          </div>
        </div>
        <div className="chat-bubble">{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
      </div>
    </>
  )
}

export default Message
