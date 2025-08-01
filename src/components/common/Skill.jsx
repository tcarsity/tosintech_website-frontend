import React from "react";

const Skill = () => {
  return (
    <section className="section-3" id="skill">
      <div className="container py-5">
        <div className="row pt-4">
          <div className="text-center">
            <h1>My Skills</h1>
            <p>
              Here are my skills and technologies i've been working with
              recently
            </p>
          </div>
        </div>
        <div className="row skill mt-2">
          <div className="col-md-6 col-sm-12 skillcol">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <h3 className="card-title text-center">
                  Front-end Development
                </h3>
                <div className="frontend">
                  <div className="content">
                    <h4>
                      HTML/CSS <span>95%</span>
                    </h4>
                    <div>
                      <p className="progress"></p>
                    </div>
                  </div>

                  <div className="mt-3 bootstrap">
                    <h4>
                      Bootstrap <span>85%</span>
                    </h4>
                    <div>
                      <p className="progress"></p>
                    </div>
                  </div>

                  <div className="mt-3 design">
                    <h4>
                      Responsive design <span>80%</span>
                    </h4>
                    <div>
                      <p className="progress"></p>
                    </div>
                  </div>

                  <div className="mt-3 javascript">
                    <h4>
                      JavaScript <span>75%</span>
                    </h4>
                    <div>
                      <p className="progress"></p>
                    </div>
                  </div>

                  <div className="mt-3 react">
                    <h4>
                      React Js <span>80%</span>
                    </h4>
                    <div>
                      <p className="progress"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 skillcol2">
            <div className="card shadow h-100">
              <div className="card-body">
                <h3 className="card-title text-center">Backend & Tools</h3>
                <div className="backend">
                  <div className="laravel">
                    <h4>
                      PHP / LARAVEL <span>90%</span>
                    </h4>
                    <div className="progress"></div>
                  </div>

                  <div className="mt-3 github">
                    <h4>
                      Git / Github <span>95%</span>
                    </h4>
                    <div className="progress"></div>
                  </div>

                  <div className="mt-3 Apis">
                    <h4>
                      RESTful/APIs <span>85%</span>
                    </h4>
                    <div className="progress"></div>
                  </div>

                  <div className="mt-3 mysql">
                    <h4>
                      MySQL <span>75%</span>
                    </h4>
                    <div className="progress"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
