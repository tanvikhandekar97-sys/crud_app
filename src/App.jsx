import React, { useState, useEffect } from 'react'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
const App = () => {
  const [editUser, setEditUser]= useState(null)
  const[ users, setUsers] = useState([])

   const fetchUsers = async () => {
    const res = await fetch("http://localhost:3001/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='page'>
      <h2 className='list-heading'>User CRUD App</h2>
      <UserForm editUser={editUser} setEditUser={setEditUser} fetchUsers={fetchUsers} />
      <UserList setEditUser={setEditUser} fetchUsers={fetchUsers} users={users} />
    </div>
  )
}

export default App