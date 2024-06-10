import React from 'react'
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations';

const Conversation = ({conversation}) => {

  const {selectedConversation,setSelectedConversation}=useConversation();
  const isSelected=selectedConversation?._id===conversation._id;

  return (
    <div className={`flex items-center gap-2 hover:bg-slate-200 hover:cursor-pointer rounded-lg p-2 me-2 
    ${isSelected?"bg-slate-200":""}`} onClick={()=>setSelectedConversation(conversation)}>
      <img className='size-14' src={conversation.profilePic} />
      <span>{conversation.fullName}</span>
    </div>
  )
}

export default Conversation
