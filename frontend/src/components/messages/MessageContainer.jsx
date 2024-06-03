import React from 'react'
import Messages from './Messages'

const MessageContainer = () => {
  return (
    <div className='flex flex-col'>
      <>
        <div className='flex items-center gap-2 w-full bg-indigo-600 py-3 rounded-b-lg px-5 fixed'>
        <img className='size-12' src="https://avatar.iran.liara.run/public" />
      {/* <span>Ankit</span> */}
          <span className='label-text text-white font-bold text-xl'>Ankit</span>
        </div>

        <Messages />
        {/* <MessageInput /> */}
      </>
    </div>
  )
}

export default MessageContainer
