import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
// import Logout from './Logout'

const Sidebar = () => {
  return (
    <div className='flex flex-col ms-1'>
      <SearchInput />
      {/* <div className="divider px-2"></div> */}
      <Conversations />
      {/* <div className="divider px-2"></div>
      <Logout /> */}
    </div>
  )
}

export default Sidebar
