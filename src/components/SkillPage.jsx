import React from "react";
import Layout from "./common/Layout";
import Skill from "./common/Skill";
import WebDevServices from "./common/WebDevServices";

const SkillPage = () => {
  return (
    <>
      <Layout>
        <section className="section-6">
          <div className="container py-5">
            <div className="row pt-4 serve d-flex align-items-center">
              <div className="text-start">
                <span>Quality. Integrity. Value.</span>
                <h1>My Skills</h1>
                <p>I offer real life solutions in technology.</p>
              </div>
            </div>
          </div>
        </section>
        <Skill />
        <WebDevServices />
      </Layout>
    </>
  );
};

export default SkillPage;
