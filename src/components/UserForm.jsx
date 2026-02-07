import React, { useEffect, useState } from "react";

const UserForm = ({ editUser, setEditUser, fetchUsers }) => {
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (editUser) {
      setFormdata(editUser);
    }
  }, [editUser]);

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email
    ) {
      alert("All fields are required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Invalid email format");
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Phone must be 10 digits");
      return;
    }
    try {
      const url = editUser
        ? `http://localhost:3001/users/${editUser.id}`
        : "http://localhost:3001/users";
      const method = editUser ? "PUT" : "POST";
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setEditUser(null);
fetchUsers()
      alert(editUser ? "User updated successfully" : "User added successfully");
      console.log(formData);
      setFormdata({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="input-field">
          First Name:
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <label className="input-field">
          Last Name:
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <label className="input-field">
          Phone:
          <input
            name="phone"
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label className="input-field">
          Email:
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <button className="submit-button" type="submit"> {editUser ? "Update": "Add"} </button>
      </form>
    </div>
  );
};

export default UserForm;
