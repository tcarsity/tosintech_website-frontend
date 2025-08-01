import React, { useEffect, useState } from "react";
import Layout from "../../common/Layout";
import { Link } from "react-router-dom";
import Sidebar from "../../common/Sidebar";
import { apiUrl, token } from "../../common/http";
import { toast } from "react-toastify";

const Show = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await fetch(apiUrl + "/projects", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
    });
    const result = await res.json();
    console.log(result);
    setProjects(result.data);
  };

  const deleteProject = async (id) => {
    if (confirm("Are you sure you want to delete?")) {
      const res = await fetch(apiUrl + "/projects/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
      });
      const result = await res.json();

      if (result.status == 200) {
        const newProjects = projects.filter((project) => project.id != id);
        setProjects(newProjects);
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <>
      <Layout>
        <div className="container py-5">
          <div className="row">
            <div className="d-flex justify-content-between mt-5 pb-3">
              <h4 className="h4 pb-0 mb-0">Projects</h4>
              <Link to="/admin/projects/create" className="btn btn-primary">
                Create
              </Link>
            </div>
            <div className="col-md-3">
              <Sidebar />
            </div>

            <div className="col-md-9">
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Site</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {projects &&
                        projects.map((project) => {
                          return (
                            <tr key={`project-${project.id}`}>
                              <td>{project.id}</td>
                              <td>{project.title}</td>
                              <td>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: project.content,
                                  }}
                                ></div>
                              </td>
                              <td>{project.site}</td>
                              <td>
                                {project.status == 1 ? "Active" : "Block"}
                              </td>
                              <td>
                                <Link
                                  to={`/admin/projects/edit/${project.id}`}
                                  className="btn btn-primary btn-sm"
                                >
                                  Edit
                                </Link>
                              </td>
                              <td>
                                <Link
                                  onClick={() => deleteProject(project.id)}
                                  to="#"
                                  className="btn btn-secondary btn-sm"
                                >
                                  Delete
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Show;
