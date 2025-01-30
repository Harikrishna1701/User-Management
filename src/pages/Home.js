import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center mt-5">
      <h1>Welcome to User Management Dashboard</h1>
      <p>Manage users efficiently with this simple web application.</p>
      <Link to="/users" className="btn btn-primary">Go to Users</Link>
    </div>
  );
};

export default Home;
