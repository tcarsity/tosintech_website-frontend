import React from "react";
import Layout from "../../common/Layout";
import Sidebar from "../../common/Sidebar";

const Dashboard = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between mt-5 pb-3">
            <h4 className="h4 pb-0 mb-0">Dashboard</h4>
          </div>
          <div className="col-md-3">
            <Sidebar />
          </div>

          <div className="col-md-9">
            <div className="card shadow border-0">
              <div className="card-body d-flex justify-content-center align-items-center">
                <h4>Welcome to admin console</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
