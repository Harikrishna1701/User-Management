import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddEditUser = () => {
  const { id } = useParams(); // If there's an ID in the URL, it means we're editing an existing user.
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const navigate = useNavigate();

  // Fetch existing user data if we're editing an existing user
  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
          );
          setUser({
            firstName: response.data.name.split(" ")[0],
            lastName: response.data.name.split(" ")[1],
            email: response.data.email,
            department: response.data.department || "", // Assuming department is optional
          });
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };
      fetchUser();
    }
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission (add or edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Editing: PUT request to update existing user
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          {
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            department: user.department,
          }
        );
        console.log("User updated:", response.data);
        navigate("/users"); // Redirect to the user list page after updating
      } else {
        // Adding: POST request to add new user
        const response = await axios.post(
          `https://jsonplaceholder.typicode.com/users`,
          {
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            department: user.department,
          }
        );
        console.log("New user added:", response.data);
        navigate("/users"); // Redirect to the user list page after adding
      }
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>{id ? "Edit" : "Add"} User</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            type="text"
            name="department"
            value={user.department}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Update" : "Add"} User
        </button>
      </form>
    </div>
  );
};

export default AddEditUser;
