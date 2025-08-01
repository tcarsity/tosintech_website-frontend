import React, { useContext } from "react";
import { AdminAuthContext } from "../context/AdminAuth";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { logout } = useContext(AdminAuthContext);
  return (
    <div className="card shadow mb-5 sidebar">
      <div className="card-body p-4">
        <ul>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/admin/projects">Projects</Link>
          </li>

          <button className="btn btn-primary mt-3" onClick={logout}>
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
