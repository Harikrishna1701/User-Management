import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import AddEditUser from "./pages/AddEditUser";

function App() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">User Management</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/add" element={<AddEditUser />} />
        <Route path="/edit/:id" element={<AddEditUser />} />
      </Routes>
    </div>
  );
}

export default App;
