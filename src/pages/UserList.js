import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/userService";
import UserTable from "../components/UserTable";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div className="mt-4">
      <h2 className="mb-3 text-center">User List</h2>
      <UserTable users={users} handleDelete={handleDelete} />
    </div>
  );
};

export default UserList;
