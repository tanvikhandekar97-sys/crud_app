import React, { useEffect, useState } from "react";

const UserList = ({setEditUser, users, fetchUsers}) => {

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await fetch(`http://localhost:3001/users/${id}`, {
        method: "DELETE",
      });
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="list-page">
      <h3>User List</h3>
      {users.map((user) => (
          <div className="user-list" key={user._id}>
            <p>
              {user.firstName} {user.lastName}
            </p>
            <p>{user.phone}</p>
            <p>{user.email}</p>
            <button className="del-button" onClick={() => deleteUser(user.id)}>Delete</button>
            <button className="edit-button" onClick={()=> setEditUser(user)}>Edit</button>
          </div>
        )
      )}
    </div>
  );
};

export default UserList;
