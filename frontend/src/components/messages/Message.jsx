import React from 'react'

const Message = () => {
  return (
    <>

      <div className='chat chat-end'>
      <div className="chat-image avatar">
          <div className="w-12 rounded-full">
            <img className='' src="https://avatar.iran.liara.run/public" />
          </div>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:45</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-12 rounded-full">
            <img className='' src="https://avatar.iran.liara.run/public" />
          </div>
        </div>
        <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:45</div>
      </div>
    </>
  )
}

export default Message
