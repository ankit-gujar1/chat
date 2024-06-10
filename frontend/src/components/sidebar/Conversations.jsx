import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'

const Conversations = () => {

  const {loading,conversations}=useGetConversations();

  return (
    <div className='flex flex-col'>
      {conversations && conversations.map((i) =>
          <Conversation
            key={i._id}
            conversation={i}
          />
        )
      }
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations
