import React from "react";
import HeroImage from "./common/HeroImage";
import About from "./common/About";
import Skill from "./common/Skill";
import Service from "./common/Service";
import Project from "./common/Project";
import Layout from "./common/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <HeroImage />

        <About />

        <Skill />

        <Service />

        <Project />
      </Layout>
    </>
  );
};

export default Home;
