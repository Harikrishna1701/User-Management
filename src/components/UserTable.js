import React from "react";
import { Link } from "react-router-dom";

const UserTable = ({ users, handleDelete }) => {
  return (
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/edit/${user.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
