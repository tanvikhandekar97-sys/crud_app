import React, { useState } from 'react'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
const App = () => {
  const [editUser, setEditUser]= useState(null)
  return (
    <div className='page'>
      <h2 className='list-heading'>User CRUD App</h2>
      <UserForm editUser={editUser} setEditUser={setEditUser} />
      <UserList setEditUser={setEditUser} />
    </div>
  )
}

export default App