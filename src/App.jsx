import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Login from "./components/admin/Login";
import Dashboard from "./components/admin/dashboard/Dashboard";
import { AdminRequireAuth } from "./components/admin/AdminRequireAuth";
import Show from "./components/admin/project/Show";
import Create from "./components/admin/project/Create";
import Edit from "./components/admin/project/Edit";
import LatestProject from "./components/common/LatestProject";
import AboutPage from "./components/AboutPage";
import SkillPage from "./components/SkillPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutPage />} />
          <Route path="/skills" element={<SkillPage />} />
          <Route path="/projects" element={<LatestProject />} />

          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <AdminRequireAuth>
                <Dashboard />
              </AdminRequireAuth>
            }
          />

          <Route
            path="/admin/projects"
            element={
              <AdminRequireAuth>
                <Show />
              </AdminRequireAuth>
            }
          />

          <Route
            path="/admin/projects/create"
            element={
              <AdminRequireAuth>
                <Create />
              </AdminRequireAuth>
            }
          />

          <Route
            path="/admin/projects/edit/:id"
            element={
              <AdminRequireAuth>
                <Edit />
              </AdminRequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
