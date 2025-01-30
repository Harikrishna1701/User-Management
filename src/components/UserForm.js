import React, { useState, useEffect } from "react";

const UserForm = ({ onSubmit, userToEdit }) => {
  // Initializing state with values to be updated (including ID, First Name, Last Name, etc.)
  const [user, setUser] = useState({
    id: userToEdit ? userToEdit.id : '',
    firstName: userToEdit ? userToEdit.firstName : '',
    lastName: userToEdit ? userToEdit.lastName : '',
    email: userToEdit ? userToEdit.email : '',
    department: userToEdit ? userToEdit.department : '',
  });

  useEffect(() => {
    if (userToEdit) {
      setUser({
        id: userToEdit.id,
        firstName: userToEdit.firstName,
        lastName: userToEdit.lastName,
        email: userToEdit.email,
        department: userToEdit.department,
      });
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user); // Triggering the onSubmit prop to either add or update user
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">{userToEdit ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        {userToEdit && (
          <div className="mb-3">
            <label className="form-label">ID</label>
            <input
              type="text"
              className="form-control"
              name="id"
              value={user.id}
              onChange={handleChange}
              disabled
            />
          </div>
        )}
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            type="text"
            className="form-control"
            name="department"
            value={user.department}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {userToEdit ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
